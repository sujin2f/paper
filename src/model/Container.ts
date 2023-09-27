import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { chartColors } from 'src/constants/chart'
import { DataType, GraphType, RawData } from 'src/types/data'
import { Row } from 'src/model/Row'
import { Item } from './Item'
import { orbitalKeys } from 'src/constants/orbital'
import { Nullable } from 'src/types/common'
import { periodicTable } from 'src/constants/periodic-table'
import { Atom } from 'src/types/atom'
import { getAtom, getConfArray } from 'src/utils/atom'

type ChartData = {
    labels: number[]
    datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[]
}

export class Container {
    public length: number = 0
    public items: Row[] = []
    public baseRadial: Nullable<Row>
    public baseLinear: Nullable<Row>
    public baseMinimum: Nullable<Row>
    private ion: number = 0
    private number: number = 0
    private atom: Atom = periodicTable.elements[0]
    private conf: string[] = []

    public constructor(rawData: RawData[], dataType: DataType) {
        if (!rawData.length) {
            return
        }
        this.ion = rawData[0].ion
        this.number = rawData[0].number
        this.atom = getAtom(this.number)
        const baseAtom = getAtom(this.number - this.ion + 1)
        this.conf = getConfArray(baseAtom.electron_configuration)

        this.setRawData(rawData)

        if (dataType === 'orbital') {
            this.setBase()
            this.setOrbital()
        }

        if (dataType === 'ether') {
            this.setBase()
            this.setOrbital()
            this.setEther()
        }

        this.items.forEach((row) => {
            const length = row.items.length
            if (length > this.length) {
                this.length = length
            }
        })

        this.setBase()
        this.items = this.items.filter((row) => row.items.length)
        this.items.forEach((row) => (row.parent = this))
    }

    private setRawData(rawData: RawData[]) {
        const items: Record<string, Item[]> = {}

        rawData.forEach((raw) => {
            const rawConf = getConfArray(raw.conf)
                .filter((conf) => !conf.startsWith('('))
                .slice(0, -1)
            const length = this.conf.length - rawConf.length - 1
            const confCompare = this.conf.slice(0, -1).slice(length)

            const item = new Item(raw)
            if (rawConf.join('') !== confCompare.join('')) {
                item.isCombination = true
            }
            const key = item.encodeURI

            if (Object.keys(items).indexOf(key) === -1) {
                items[key] = []
            }

            items[key][item.position] = item
        })

        Object.keys(items).forEach((rowKey) => {
            const row = new Row(items[rowKey], this)
            row.label = `${row.first.term}.${row.first.j}`
            this.items.push(row)
        })
    }

    private setOrbital() {
        const baseRadial = this.baseRadial
        if (!baseRadial) {
            return
        }
        const baseOIndex = orbitalKeys.indexOf(baseRadial.first.orbital)
        const orbitals: number[] = []

        const items = this.items.filter((row) => {
            if (
                !row.first.orbital ||
                row.first.jNumber === undefined ||
                row.first.jIncrement === undefined ||
                row.first.termIncrement === undefined ||
                baseRadial.first.termNumber === undefined
            ) {
                return false
            }

            const oIndex = orbitalKeys.indexOf(row.first.orbital) - baseOIndex

            if (
                row.first.termNumber !==
                baseRadial.first.termNumber + oIndex * row.first.termIncrement
            ) {
                return false
            }

            const result =
                row.first.jNumber === baseRadial.first.jNumber + oIndex &&
                row.first.confPrefix === baseRadial.first.confPrefix
            if (result && orbitals.indexOf(oIndex) === -1) {
                orbitals.push(oIndex)
                return true
            }
            return false
        })

        items.forEach((row) => {
            row.label = `${row.first.orbital}.${row.first.term}.${row.first.j}`
        })

        this.items = items
    }

    private setEther() {
        let items: Nullable<Item>[][] = []

        this.items.forEach((row) => {
            // Radial Ether
            if (row.first.orbital === 's') {
                items[0] = row.items
                return
            }

            row.items.forEach((item) => {
                if (!item) {
                    return
                }

                // 2p  3d  4f  5g  6h
                //     3p  4d  5f  6g
                //         4p  5d  6f
                const position = item.position
                const orbitalIndex = orbitalKeys.indexOf(item.orbital)

                const posY = position - orbitalIndex

                if (!items[posY]) {
                    items[posY] = []
                }
                items[posY][item.position] = item
            })
        })

        this.items = []

        items.forEach((items, index) => {
            if (!items.length) {
                return
            }

            const row = new Row(items, this)

            if (index === 0) {
                row.label = 'Radial'
            } else if (index === 1) {
                row.label = 'Linear'
            } else {
                row.label = `${index}S Base`
            }

            this.items.push(row)
        })
    }

    private setBase() {
        this.baseRadial = this.items
            .filter((item) => item.first.orbital === 's')
            .sort((rowA, rowB) => {
                return (rowA.first.rydberg || 0) - (rowB.first.rydberg || 0)
            })[0]
        this.baseLinear = this.items
            .filter((item) => item.first.orbital === 'p')
            .sort((rowA, rowB) => {
                return (rowA.first.rydberg || 0) - (rowB.first.rydberg || 0)
            })[0]
        let minimum = 10000000000000000
        this.items.forEach((item) => {
            if (item.first.rydberg < minimum) {
                minimum = item.first.rydberg
                this.baseMinimum = item
            }
        })
    }

    public chart(graphType: GraphType): ChartData {
        const datasets = this.items.map((row, index) => {
            const data: number[] = row.items.map((item) => {
                let value
                switch (graphType) {
                    case 'fixed':
                        value = item ? item.percent : NaN
                        break
                    case 'float':
                        value = item ? item.percentFloat : NaN
                        break
                    case 'base':
                        value = item ? item.basePercent : NaN
                        break
                    default:
                        value = item ? item.percent : NaN
                }
                return value
            })

            const result: ChartDataset<'line', DefaultDataPoint<'line'>> = {
                label: row.label,
                data,
                fill: false,
                borderColor: chartColors[index] || 'rgb(200, 200, 200)',
                tension: 0.1,
            }
            return result
        })

        const length: number[] = datasets.map((v) => v.data.length)

        const columns = length.length
            ? Array(Math.max(...length))
                  .fill(0)
                  .map((_, i) => i + 1)
            : []

        return {
            labels: datasets.length ? columns : [],
            datasets,
        }
    }

    // 1 KiloJoule Per Mole = 0.0103636 Electron Volt Per Particle
    private evConv = 0.0103636
    private _ratio = NaN
    public get ratio() {
        if (isNaN(this._ratio)) {
            this._ratio =
                getAtom(this.ion).ionization_energies[this.ion - 1] *
                this.evConv
        }
        return this._ratio
    }

    private _shift = NaN
    public get shift() {
        if (isNaN(this._shift)) {
            const ionization =
                (this.atom.ionization_energies[this.ion - 1] || 1) * this.evConv
            this._shift = ionization - this.ratio
        }
        return this._shift
    }

    private _dominantRadial: Nullable<Row>
    public get dominantRadial(): Row {
        if (this._dominantRadial) {
            return this._dominantRadial
        }
        let startPosition = 100
        this._dominantRadial = this.items
            .filter((row) => {
                if (
                    row.first.orbital === 's' &&
                    startPosition > row.first.position
                ) {
                    startPosition = row.first.position
                }
                return row.first.orbital === 's'
            })
            .filter((row) => row.first.position === startPosition)
            .sort((a, b) =>
                a.items.filter((item) => item).length <
                b.items.filter((item) => item).length
                    ? 1
                    : -1,
            )[0]
        return this._dominantRadial
    }
}
