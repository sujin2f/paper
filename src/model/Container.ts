import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { chartColors } from 'src/constants/chart'
import { RawData } from 'src/types/data'
import { DataType, GraphType } from 'src/types/ui'
import { Row } from 'src/model/Row'
import { ElectronState } from './ElectronState'
import { Iterator } from './Iterator'
import { orbitalKeys } from 'src/constants/orbital'
import { TermGroup } from './TermGroup'
import { trimEnd } from 'src/common/utils/array'

type ChartDatasets = ChartDataset<'line', DefaultDataPoint<'line'>>

type ChartData = {
    labels: number[]
    datasets: ChartDatasets[]
}

export class Container extends Iterator<TermGroup> {
    private static instance: Container
    public static getInstance(): Container | undefined {
        if (!Container.instance) {
            return undefined
        }
        return Container.instance
    }

    private ion: number
    private number: number
    private baseState: ElectronState

    public static getOrCreateInstance(
        number: number,
        ion: number,
        rawData: RawData[],
        dataType: DataType,
        term = 0,
    ): Container {
        if (!Container.instance) {
            Container.instance = new Container(rawData, dataType, term)
        }

        if (
            Container.instance.ion === ion &&
            Container.instance.number === number &&
            Container.instance.dataType === dataType
        ) {
            const container = Container.instance
            if (container.term !== term) {
                container.term = term
                container.setTerm()
            }
            return Container.instance
        }

        Container.instance = new Container(rawData, dataType, term)
        return Container.instance
    }

    public constructor(
        rawData: RawData[],
        public dataType: DataType,
        public term = 0,
    ) {
        super()
        this.ion = rawData[0].ion
        this.number = rawData[0].number

        let rows: Record<string, Row[]> = {} // by term group

        this.baseState = new ElectronState(rawData[0])
        rawData.forEach((data) => {
            if (data.rydberg === 0) {
                this.baseState = new ElectronState(data)
            }
        })
        switch (dataType) {
            case 'orbital':
                rows = this.setOrbital(rawData)
                break
            case 'ether':
                rows = this.setEther(rawData)
        }

        // Remove empty Rows and push it into this.items
        Object.keys(rows).forEach((key) => {
            const filteredRows = rows[key].filter((row) => row !== undefined)
            const termGroup = new TermGroup(filteredRows, this.number, this.ion)
            this.items.push(termGroup)
        })

        this.setTerm()
    }

    /*
     * Maximum number of ElectronState in all Rows
     * to make table columns
     */
    public get maxCols() {
        let max = this.get(0).get(0)
        this.forEach((termGroup) => {
            termGroup.forEach((row) => {
                if (row.length > max.length) {
                    max = row
                }
            })
        })
        return max.length
    }

    /*
     * Set child terms visibilities
     */
    private setTerm() {
        // Show all
        if (this.term === 0) {
            this.forEach((termGroup) => {
                termGroup.visible = true
            })
            return
        }

        this.forEach((termGroup, index) => {
            if (index === this.term - 1) {
                termGroup.visible = true
            } else {
                termGroup.visible = false
            }
        })
    }

    /*
     * Create Row groups by its term group
     */
    private setOrbital(rawData: RawData[]) {
        const linear: Record<string, Row> = {}
        const rows: Record<string, Row[]> = {}

        rawData.forEach((rawItem) => {
            const electron = new ElectronState(rawItem)
            const orbital = orbitalKeys.indexOf(electron.orbital)
            const radial = electron.position - orbital
            const term = electron.termNumber
            const j = electron.jNumber - orbital
            const prefix = electron.confPrefix.join('.')
            const key = `${prefix}.${term}.${j}`

            if (!rows[key]) {
                rows[key] = []
            }

            if (!rows[key][orbital]) {
                rows[key][orbital] = new Row()
            }

            if (!linear[key]) {
                linear[key] = new Row()
            }

            rows[key][orbital].set(electron.position, electron)

            // Linear row
            if (!radial) {
                const electronLinear = new ElectronState(rawItem)
                linear[key].set(electron.position, electronLinear)
            }
        })

        // For each rows, set type
        Object.keys(rows).forEach((key) => {
            rows[key].forEach((row) => {
                if (!row.first) {
                    return
                }
                if (row.first.orbital === 's') {
                    row.type = 'radial'
                } else {
                    row.type = 'orbital'
                }

                // Fill linear items to empty positions
                if (linear[key] && row.type === 'orbital') {
                    linear[key]
                        .slice(0, row.first.position)
                        .forEach((electron) => {
                            row.set(electron.position, electron)
                        })
                }
            })
        })

        // Push Linear to rows
        Object.keys(linear).forEach((key) => {
            if (linear[key].length) {
                linear[key].type = 'linear'
                rows[key].push(linear[key])
            }
        })

        return rows
    }

    /*
     * Create Row groups by its term group
     */
    private setEther(rawData: RawData[]) {
        const radialObj: Record<string, Row> = {}
        const rows: Record<string, Row[]> = {}

        rawData.forEach((data) => {
            const electron = new ElectronState(data)
            const orbital = orbitalKeys.indexOf(electron.orbital)
            const term = electron.termNumber
            const j = electron.jNumber - orbital
            const prefix = electron.confPrefix.join('.')
            const radial = electron.position - orbital
            const key = `${prefix}.${term}.${j}`
            if (!rows[key]) {
                rows[key] = []
            }
            if (electron.orbital === 's') {
                // Radial
                if (!rows[key][0]) {
                    rows[key][0] = new Row()
                    rows[key][0].type = 'radial'
                }
                rows[key][0].set(electron.position, electron)
                // Radial Object
                const electronRadial = new ElectronState(data)
                if (!radialObj[key]) {
                    radialObj[key] = new Row()
                }
                radialObj[key].set(electron.position, electronRadial)
                if (radial) {
                    // S base
                    const electronBase = new ElectronState(data)
                    if (!rows[key][radial + 1]) {
                        rows[key][radial + 1] = new Row()
                        rows[key][radial + 1].type = 'ether'
                    }
                    rows[key][radial + 1].set(
                        electronBase.position,
                        electronBase,
                    )
                }
            } else if (radial === 0) {
                // Linear
                if (!rows[key][1]) {
                    rows[key][1] = new Row()
                    rows[key][1].type = 'linear'
                }
                rows[key][1].set(electron.position, electron)
            } else {
                // S base
                if (!rows[key][radial + 1]) {
                    rows[key][radial + 1] = new Row()
                    rows[key][radial + 1].type = `ether`
                }
                rows[key][radial + 1].set(electron.position, electron)
            }
        })
        Object.keys(rows).forEach((key) => {
            rows[key].forEach((row) => {
                // Fill radial items
                if (radialObj[key] && row.type !== 'linear') {
                    radialObj[key]
                        .slice(0, row.first.position)
                        .forEach((electron) => {
                            row.set(electron.position, electron)
                        })
                }
            })
        })
        return rows
    }

    /*
     * Chart Data
     */
    public getChartData(graphType: GraphType): ChartData {
        const datasets: ChartDatasets[] = []
        this.filter((term) => term.visible).forEach((term) => {
            // only visible terms
            const rowData = term
                .filter((row) => !row.isCombination)
                .map((row, index) => {
                    const data: number[] = row
                        .map((electron) => {
                            if (!electron) {
                                return NaN
                            }

                            switch (graphType) {
                                case 'transform':
                                    return this.getTransform(
                                        term,
                                        row,
                                        electron,
                                    )
                                case 'between':
                                    return this.getBetween(term, row, electron)
                                default:
                                    return this.getTransform(
                                        term,
                                        row,
                                        electron,
                                    )
                            }
                        })
                        .slice(1)

                    // Cut empty value from the end
                    const trimmed = trimEnd(data)

                    if (trimmed.length === 0) {
                        return false
                    }

                    const result: ChartDatasets = {
                        label: `${row.type}${row.symbol}`,
                        data: trimmed,
                        fill: false,
                        borderColor: chartColors[index] || 'rgb(200, 200, 200)',
                        tension: 0,
                    }
                    return result
                })

            // Filter empty out
            const filtered = rowData.filter((i) => i) as ChartDatasets[]
            datasets.push(...filtered)
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

    /*
     * Modified Rydberg formula
     */
    private getRydberg(
        ratio: number,
        shift: number,
        k: number,
        position: number,
    ) {
        return ratio * (1 - 1 / Math.pow(position + 1 + k, 2)) + shift
    }
    /*
     * For storing data, make a unique key of each rows
     */
    private getUniqueKey(termGroup: TermGroup, row: Row) {
        return `${termGroup.key}.${row.type}.${row.symbol}.${row.first.energy}`
    }

    /*
     * Transform equation
     */
    private _transform: Record<string, number[]> = {}
    public getTransform(
        termGroup: TermGroup,
        row: Row,
        electron: ElectronState,
    ): number {
        const key = this.getUniqueKey(termGroup, row)
        const position = electron.position

        if (!this._transform[key]) {
            this._transform[key] = []
        }
        if (this._transform[key][position]) {
            return this._transform[key][position]
        }

        // Before the first item
        if (row.first.position > position) {
            this._transform[key][position] = NaN
            return NaN
        }

        // First item of ether and orbital
        if (
            (row.type === 'ether' || row.type === 'orbital') &&
            row.first === electron
        ) {
            this._transform[key][position] = NaN
            return NaN
        }

        // Base state
        if (!electron.prev) {
            this._transform[key][position] = NaN
            return NaN
        }

        // Shifted point is always zero
        if (electron.prev.energy === 0) {
            this._transform[key][position] = 0
            return 0
        }

        // Get horizontal shift (k) of prev and current state
        const hShift = electron.isRadial
            ? termGroup.radialHShift
            : termGroup.linearHShift
        const hShiftPrev = electron.prev.isRadial
            ? termGroup.radialHShift
            : termGroup.linearHShift

        if (isNaN(hShift) || isNaN(hShiftPrev)) {
            this._transform[key][position] = NaN
            return NaN
        }

        // Vertical shift (s)
        const vShift = termGroup.peak - termGroup.ratio

        // Rydberg of two points
        const r2 = this.getRydberg(termGroup.ratio, vShift, hShift, position)
        const r1 = this.getRydberg(
            termGroup.ratio,
            vShift,
            hShiftPrev,
            position - 1,
        )

        // Rydberg for normalization
        const normalize =
            this.getRydberg(termGroup.ratio, vShift, 0, position) -
            this.getRydberg(termGroup.ratio, vShift, 0, position - 1)

        this._transform[key][position] = (electron.diff - (r2 - r1)) / normalize
        return this._transform[key][position]
    }

    /*
     * Between equation
     */
    private _between: Record<string, number[]> = {}
    public getBetween(termGroup: TermGroup, row: Row, electron: ElectronState) {
        const key = this.getUniqueKey(termGroup, row)
        const position = electron.position

        if (!this._between[key]) {
            this._between[key] = []
        }
        if (this._between[key][position]) {
            return this._between[key][position]
        }

        // Before the first item
        if (row.first.position > position) {
            this._between[key][position] = NaN
            return NaN
        }

        // First item of ether and orbital
        if (
            (row.type === 'ether' || row.type === 'orbital') &&
            row.first === electron
        ) {
            this._between[key][position] = NaN
            return NaN
        }
        // Base state
        if (!electron.prev) {
            this._between[key][position] = NaN
            return NaN
        }

        // Remove shifted point
        if (electron.prev.energy === 0) {
            this._between[key][position] = 0
            return NaN
        }

        // Get horizontal shift (k) of radial and linear
        const radialShift = termGroup.radialHShift
        const linearHShift = termGroup.linearHShift

        if (isNaN(radialShift) || isNaN(linearHShift)) {
            this._between[key][position] = NaN
            return NaN
        }

        // Vertical shift (s)
        const vShift = termGroup.peak - termGroup.ratio

        // s orbital equation
        const sRydberg1 = this.getRydberg(
            termGroup.ratio,
            vShift,
            radialShift,
            position,
        )
        const sRydberg2 = this.getRydberg(
            termGroup.ratio,
            vShift,
            radialShift,
            position - 1,
        )
        // p orbital equation
        const pRydberg1 = this.getRydberg(
            termGroup.ratio,
            vShift,
            linearHShift,
            position,
        )
        const pRydberg2 = this.getRydberg(
            termGroup.ratio,
            vShift,
            linearHShift,
            position - 1,
        )

        this._between[key][position] =
            (100 * (electron.diff - (sRydberg1 - sRydberg2))) /
            (pRydberg1 - pRydberg2 - (sRydberg1 - sRydberg2))
        return this._between[key][position]
    }
}
