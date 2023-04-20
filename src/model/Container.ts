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
    public baseZero: Nullable<Row>
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
        this.conf = getConfArray(this.atom.electron_configuration)

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
            if (rawConf.join('') !== confCompare.join('')) {
                return
            }

            const item = new Item(raw)
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
        this.baseZero = this.items.filter((item) => item.first.rydberg === 0)[0]
    }

    public chart(graphType: GraphType): ChartData {
        const datasets = this.items.map((row, index) => {
            const data: number[] = row.items.map((item) => {
                let value
                switch (graphType) {
                    case 'percent-float':
                        value = item ? item.percentFloat : NaN
                        break
                    case 'percent-base':
                        value = item ? item.percentBase : NaN
                        break
                    case 'coordinate':
                        value = item ? item.coordinate : NaN
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

    public get i() {
        return 0.999733242
    }

    public get x() {
        const ionization = this.atom.ionization_energies[this.ion - 1] || 1
        return ionization / 1312 - 1
    }
    // 1.5598
    // 2.311
    // 3.0615
    // 3.807
    // 4.56
}
