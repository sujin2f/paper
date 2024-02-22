import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { chartColors } from 'src/constants/chart'
import { DataType, GraphType, RawData } from 'src/types/data'
import { Row } from 'src/model/Row'
import { Item } from './Item'
import { Iterator } from './Iterator'
import { jouleToEv, orbitalKeys } from 'src/constants/orbital'
import { periodicTable } from 'src/constants/periodic-table'
import { Atom } from 'src/types/atom'
import { getAtom, getConfArray } from 'src/utils/atom'
import { Nullable } from 'src/types/common'

type ChartData = {
    labels: number[]
    datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[]
}

export class Container extends Iterator<Row> {
    private static instance: Container
    public static getInstance(): Container {
        if (!Container.instance) {
            Container.instance = new Container([], 'raw-data')
        }
        return Container.instance
    }
    public static getOrCreateInstance(
        number: number,
        ion: number,
        rawData: RawData[],
        dataType: DataType,
        root = 0,
    ): Container {
        if (!Container.instance) {
            Container.instance = new Container(rawData, dataType, root)
        }

        if (
            Container.instance.ion === ion &&
            Container.instance.number === number &&
            Container.instance.dataType === dataType
        ) {
            const container = Container.instance
            if (container.root !== root) {
                container.root = root
                container.setTerm()
            }
            return Container.instance
        }

        Container.instance = new Container(rawData, dataType, root)
        return Container.instance
    }

    private atom: Atom = periodicTable.elements[0]
    private allItems: Record<string, Row[]> = {}
    public roots: Row[] = []

    public get ion() {
        return this.rawData[0].ion
    }

    public get number() {
        return this.rawData[0].number
    }

    public get maxLength() {
        let max = this.get(0)
        this.forEach((row) => {
            if (row.length > max.length) {
                max = row
            }
        })
        return max.length
    }

    private _orbitalBase: string[] = []
    private get orbitalBase() {
        if (this._orbitalBase.length !== 0) {
            return this._orbitalBase
        }

        this._orbitalBase = getConfArray(this.atom.electron_configuration)
        return this._orbitalBase
    }

    private _peak = NaN
    public get peak() {
        if (!isNaN(this._peak)) {
            return this._peak
        }

        let energies = getAtom(this.number).ionization_energies
        if (energies.length < this.number) {
            energies = energies.concat(
                Array(energies.length - this.number).fill(0),
            )
        }
        this._peak = energies[this.ion - 1] * jouleToEv
        return this._peak
    }

    private _ratio = NaN
    public get ratio() {
        if (!isNaN(this._ratio)) {
            return this._ratio
        }

        this._ratio = 0
        const energy = getAtom(this.ion).ionization_energies[this.ion - 1]
        if (energy) {
            this._ratio = energy * jouleToEv
        }
        return this._ratio
    }

    private _groundFixed: Nullable<Row>
    public get groundFixed(): Row {
        if (this._groundFixed) {
            return this._groundFixed
        }

        const allItems = Object.values(this.allItems).reduce((prev, next) =>
            prev.concat(next),
        )
        this._groundFixed = allItems.filter((row) => row.isGroundFixed)[0]
        return this._groundFixed
    }

    public constructor(
        private rawData: RawData[],
        public dataType: DataType,
        public root = 0,
    ) {
        super()
        let items: Record<string, Row[]> = {} // Term Symbol
        this.atom = getAtom(this.number)
        switch (dataType) {
            case 'raw-data':
                items = this.setRawData()
                break
            case 'ether':
                items = this.setEther()
        }

        Object.keys(items).forEach((key) => {
            items[key] = items[key].filter((row) => row !== undefined)
        })

        // Set Ground Fixed and Low Fixed rows
        let groundFixed: Row = items[Object.keys(items)[0]][0]
        Object.keys(items).forEach((key) => {
            items[key].forEach((row) => {
                if (!groundFixed || groundFixed.energy > row.energy) {
                    groundFixed = row
                }
            })
        })
        groundFixed.isGroundFixed = true

        const basePosition = groundFixed.position + 1
        let lowFixed: Row = groundFixed
        Object.keys(items).forEach((key) => {
            items[key].forEach((row) => {
                if (
                    !lowFixed.get(basePosition) ||
                    (row.get(basePosition) &&
                        lowFixed.get(basePosition).energy >
                            row.get(basePosition).energy)
                ) {
                    lowFixed = row
                }
            })
        })
        lowFixed.lowFixedIndex = basePosition

        this.allItems = items
        Object.keys(items).forEach((groupKey, index) => {
            const group = items[groupKey].filter((row) => row.length !== 0)
            group.forEach((row, rowIndex) => {
                // Roots
                if (rowIndex === 0) {
                    this.roots.push(row)
                }

                // Per Term
                if (this.root === 0) {
                    this.items.push(row)
                } else if (index + 1 === this.root) {
                    this.items.push(row)
                }
            })
        })
        this.setTerm()
    }

    public setTerm() {
        if (this.root === 0) {
            this.items = Object.values(this.allItems).reduce((prev, next) =>
                prev.concat(next),
            )
            return
        }
        this.items = Object.values(this.allItems)[this.root - 1]
    }

    private setRawData() {
        const linear: Record<string, Row> = {}
        const items: Record<string, Row[]> = {}
        let key = ''

        this.rawData.forEach((rawItem) => {
            const item = new Item(rawItem, this)
            const orbital = orbitalKeys.indexOf(item.orbital)
            const radial = item.position - orbital
            const term = item.termNumber
            const j = item.jNumber - orbital
            const prefix = item.confPrefix.join('.')
            key = `${prefix}.${term}.${j}`

            if (!items[key]) {
                items[key] = []
            }

            if (!items[key][orbital]) {
                items[key][orbital] = new Row(this)
                items[key][orbital].isCombination = this.isCombination(item)
            }

            if (!linear[key]) {
                linear[key] = new Row(this)
                linear[key].isCombination = this.isCombination(item)
            }

            items[key][orbital].set(item.position, item)

            if (!radial) {
                const itemLinear = new Item(rawItem, this)
                linear[key].set(item.position, itemLinear)
            }
        })

        Object.keys(items).forEach((key) => {
            items[key].forEach((row) => {
                // Set first item for Float
                row.first = row.filter((item) => item !== undefined)[0]
                if (row.first.orbital === 's') {
                    row.type = 'radial'
                } else {
                    row.type = 'orbital'
                }

                // Fill linear items
                if (linear[key] && row.type === 'orbital') {
                    linear[key].slice(0, row.position).forEach((item) => {
                        row.set(item.position, item)
                    })
                }
            })
        })

        // Push Linear to items
        Object.keys(linear).forEach((key) => {
            if (linear[key].length) {
                linear[key].type = 'linear'
                linear[key].first = linear[key].filter((item) => !!item)[0]
                items[key].push(linear[key])
            }
        })

        return items
    }

    private setEther() {
        const radialObj: Record<string, Row> = {}
        const items: Record<string, Row[]> = {}
        let key = ''

        this.rawData.forEach((data) => {
            const item = new Item(data, this)
            const orbital = orbitalKeys.indexOf(item.orbital)
            const term = item.termNumber
            const j = item.jNumber - orbital
            const prefix = item.confPrefix.join('.')
            const radial = item.position - orbital
            key = `${prefix}.${term}.${j}`

            if (!items[key]) {
                items[key] = []
            }

            if (item.orbital === 's') {
                // Radial
                if (!items[key][0]) {
                    items[key][0] = new Row(this)
                    items[key][0].isCombination = this.isCombination(item)
                    items[key][0].type = 'radial'
                }
                items[key][0].set(item.position, item)

                // Radial Object
                const itemRadial = new Item(data, this)
                if (!radialObj[key]) {
                    radialObj[key] = new Row(this)
                }
                radialObj[key].set(item.position, itemRadial)

                if (radial) {
                    // S base
                    const itemBase = new Item(data, this)
                    if (!items[key][radial + 1]) {
                        items[key][radial + 1] = new Row(this)
                        items[key][radial + 1].isCombination =
                            this.isCombination(itemBase)
                        items[key][radial + 1].type = 'ether'
                    }
                    items[key][radial + 1].set(itemBase.position, itemBase)
                }
            } else if (radial === 0) {
                // Linear
                if (!items[key][1]) {
                    items[key][1] = new Row(this)
                    items[key][1].isCombination = this.isCombination(item)
                    items[key][1].type = 'linear'
                }
                items[key][1].set(item.position, item)
            } else {
                // S base
                if (!items[key][radial + 1]) {
                    items[key][radial + 1] = new Row(this)
                    items[key][radial + 1].isCombination =
                        this.isCombination(item)
                    items[key][radial + 1].type = `ether`
                }
                items[key][radial + 1].set(item.position, item)
            }
        })

        Object.keys(items).forEach((key) => {
            items[key].forEach((row) => {
                // Set first item for Float
                row.first = row.filter((item) => item !== undefined)[0]
                // Fill radial items
                if (radialObj[key] && row.type !== 'linear') {
                    radialObj[key].slice(0, row.position).forEach((item) => {
                        row.set(item.position, item)
                    })
                }
            })
        })

        return items
    }

    public chart(graphType: GraphType): ChartData {
        const datasets = this.filter((row) => !row.isCombination).map(
            (row, index) => {
                const data: number[] = row
                    // eslint-disable-next-line array-callback-return
                    .map((item, position) => {
                        if (!item) {
                            return NaN
                        }

                        switch (graphType) {
                            case 'ground-fixed':
                                return this.getFixedPercent(item, row)
                            case 'float':
                                return row.getFloatPercent(position)
                            case 'between':
                                return this.getBetween(item)
                        }
                    })
                    .slice(1)

                const result: ChartDataset<'line', DefaultDataPoint<'line'>> = {
                    label: `${row.type}${row.symbol}`,
                    data,
                    fill: false,
                    borderColor: chartColors[index] || 'rgb(200, 200, 200)',
                    tension: 0,
                }
                return result
            },
        )

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

    private isCombination(item: Item): boolean {
        // Check if it's not multiple ethers
        const orbitalBase = getConfArray(item.conf)
            .filter((conf) => !conf.startsWith('('))
            .slice(0, -1)
        const length = this.orbitalBase.length - orbitalBase.length - 1
        const confCompare = this.orbitalBase.slice(0, -1).slice(length)

        if (orbitalBase.join('') !== confCompare.join('')) {
            return true
        }

        return false
    }

    private _fixed: number[] = []
    public getFixed(item: Item): number {
        const position = item.position

        if (!this._fixed[position]) {
            // Rydberg Equation
            const p = this.peak
            const r = this.ratio
            if (p === 0 || r === 0) {
                this._fixed[position] = NaN
                return this._fixed[position]
            }

            const partial = Math.sqrt(r / (p - this.groundFixed.energy))
            this._fixed[position] =
                p -
                r / Math.pow(position - this.groundFixed.position + partial, 2)
        }
        return this._fixed[item.position]
    }

    private _fixedDiff: number[] = []
    public getFixedDiff(item: Item): number {
        const position = item.position
        if (!item.prev) {
            return this.getFixed(item)
        }
        if (!this._fixedDiff[position]) {
            if (position === this.groundFixed.position + 1) {
                this._fixedDiff[position] = this.getFixed(item)
                return this._fixedDiff[position]
            }

            this._fixedDiff[position] =
                this.getFixed(item) - this.getFixed(item.prev)
        }

        return this._fixedDiff[position]
    }

    public getFixedPercent(item: Item, row: Row): number {
        const position = item.position
        if (position < row.first.position) {
            return NaN
        }
        if (position <= this.groundFixed.position) {
            return NaN
        }
        if (item.prev) {
            return (this.getFixedDiff(item) / item.diff) * 100
        }
        return (this.getFixed(item) / item.energy) * 100
    }

    private k: [number, number] = [NaN, NaN]
    public getK(): number[] {
        if (isNaN(this.k[0]) && isNaN(this.k[1])) {
            let allK: number[] = []
            this.filter((row) => !row.isCombination).forEach((row) => {
                const k = row.getK().filter((value) => !isNaN(value))
                allK.push(...k)
            })
            // console.log(allK)
            allK = allK.sort()
            this.k = [Math.min(...allK), Math.max(...allK)]
        }
        return this.k
    }

    private _betweenRydberg: [number[], number[]] = [[], []]
    private getRydberg(position: number, kIndex: number) {
        if (this._betweenRydberg[kIndex][position]) {
            return this._betweenRydberg[kIndex][position]
        }

        // Rydberg Equation
        const peak = this.peak
        const ratio = this.ratio

        if (peak === 0 || ratio === 0) {
            this._betweenRydberg[kIndex][position] = NaN
            return this._betweenRydberg[kIndex][position]
        }

        this.getK()
        const shift = peak - ratio
        this._betweenRydberg[kIndex][position] =
            ratio * (1 - 1 / Math.pow(position + 1 + this.k[kIndex], 2)) + shift

        return this._betweenRydberg[kIndex][position]
    }

    public getBetween(item: Item) {
        const min =
            this.getRydberg(item.position, 1) -
            this.getRydberg(item.position - 1, 1)
        const max =
            this.getRydberg(item.position, 0) -
            this.getRydberg(item.position - 1, 0)

        if (!item.prev) {
            return NaN
        }
        const energy = item.energy - item.prev.energy
        console.log(max, min, energy)
        return (100 * (energy - min)) / (max - min)
    }
}
