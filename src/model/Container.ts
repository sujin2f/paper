import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { chartColors } from 'src/constants/chart'
import { DataType, GraphType, RawData } from 'src/types/data'
import { Row } from 'src/model/Row'
import { Item } from './Item'
import { orbitalKeys } from 'src/constants/orbital'
import { Nullable } from 'src/types/common'

type ChartData = {
    labels: number[]
    datasets: ChartDataset<'line', DefaultDataPoint<'line'>>[]
}

export class Container {
    public length: number = 0
    public items: Row[] = []
    private baseRadial: Nullable<Row>
    private baseLinear: Nullable<Row>
    private baseZero: Nullable<Row>
    private ion: number = 0
    private number: number = 0

    public constructor(rawData: RawData[], dataType: DataType) {
        if (!rawData.length) {
            return
        }
        this.ion = rawData[0].ion
        this.number = rawData[0].number

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
                    default:
                        value = item ? item.percent : NaN
                }
                return value
            })

            const result = {
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

    public getPercent(item: Item) {
        const nthDiff = this.getNthDiff(item)
        if (isNaN(nthDiff)) {
            return NaN
        }
        const percent = (item.diff / nthDiff) * 100
        if (!percent || !isFinite(percent)) {
            return NaN
        }
        return percent
    }

    private getNth(item: Item) {
        if (!item || !this.baseZero?.first.position) {
            return NaN
        }

        let firstItem: Nullable<Item> = item.parent?.first

        if (item.parent === this.baseZero) {
            firstItem = item.parent.first.next
        } else {
            firstItem = item.parent?.first
        }

        if (this.baseZero.first.position >= (firstItem?.position || 0)) {
            firstItem = firstItem?.next
        }

        if (!firstItem) {
            return item.diff
        }

        // let base: Row = this.baseRadial!

        // if (item.orbital === 's' && !this.baseRadial) {
        //     return 0
        // } else if (item.orbital !== 's' && !this.baseLinear) {
        //     return 0
        // } else if (item.orbital === 's') {
        //     base = this.baseRadial!
        // } else if (item.orbital !== 's') {
        //     base = this.baseLinear!
        // }

        const position = item.position
        const zeroPosition = this.baseZero!.first.position

        if (position === zeroPosition) {
            return item.diff
        }

        const shift = this.baseZero?.first.position > 1 ? this.firstPoint : 0

        return (
            this.peakPoint -
            Math.pow(
                item.ion /
                    (position -
                        1 +
                        item.ion /
                            Math.sqrt(
                                this.peakPoint - (firstItem.rydberg + shift),
                            ) -
                        (firstItem.position - 1)),
                2,
            ) -
            shift
        )
    }

    public getNthDiff(item: Item) {
        if (item.prev) {
            return this.getNth(item) - this.getNth(item.prev)
        }
        return this.getNth(item)
    }

    private get peakPoint() {
        const ion = this.ion
        const z = this.number
        return (
            -0.000399760975 * Math.pow(ion, 3) +
            (0.235627110955 + 0.000399760975 * z) * Math.pow(ion, 2) +
            (0.766870826545 * z - 0.049828209935) * ion +
            0.042330397435 * z +
            0.004439875
        )
    }

    private get firstPoint() {
        const ion = this.ion
        const z = this.number
        return (
            0.000113677685 * Math.pow(ion, 3) +
            (0.079662445659 + 0.000113677685 * z) * Math.pow(ion, 2) +
            (0.672102345996 * z - 0.0695721690208) * ion +
            0.0643857576048 * z +
            0.0030203673552
        )
    }
}
