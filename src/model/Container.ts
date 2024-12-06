import { ChartData, ChartDataset, ChartOptions } from 'chart.js/auto'
import { TermGroup } from './TermGroup'
import { TABLE_ROW } from 'src/types/data'
import { getDataset } from 'src/utils/chart'
import { periodicTable } from 'src/constants/periodic-table'
import { Row } from './Row'
import { getRatio } from 'src/utils/atom'

export type values = string | number | undefined

export abstract class Container extends Array<TermGroup> {
    /**
     * List of row values
     */
    abstract tableRows: (keyof typeof TABLE_ROW)[]

    /**
     * List of chart selection
     */
    abstract chartTypes: (keyof typeof TABLE_ROW)[]

    /**
     * Get address to create a link
     */
    abstract getAddress(param: unknown): string

    /**
     * Get the series of string that uses from chart
     */
    protected abstract getChartLabel(): string[]

    /**
     * Current chart type
     */
    public chartType: keyof typeof TABLE_ROW = 'close'

    /**
     * Maximum number of ElectronState in all Rows to make table columns
     */
    public get cols() {
        const lengths = this.map((group) =>
            group.map((row) => row.length),
        ).flat()
        return Math.max(...lengths)
    }

    public min = 0
    private _max = NaN
    public get max() {
        if (!isNaN(this._max)) {
            return Math.min(this.cols, this._max)
        }
        return this.cols
    }
    public set max(max: number) {
        this._max = max
    }

    public getRowValues(
        type: keyof typeof TABLE_ROW,
        _: TermGroup,
        row: Row,
    ): values[] {
        let arr: values[] = []
        switch (type) {
            case 'orbital':
                arr = row.map(
                    (electron) => electron.conf[electron.conf.length - 1],
                )
                break
            case 'ether':
                arr = row.map((electron) => electron.toString('ether'))
                break
            case 'energy':
                arr = row.map((electron) => electron.energy)
                break
            case 'diff':
                arr = row.map((electron) => electron.diff)
                break
            case 'scaled':
                arr = row.map((electron) => electron.scaled)
                break
            case 'k':
                arr = row.map((electron) => electron.k)
                break
            case 'ratio':
                arr = row.map((electron) => getRatio(electron.ion))
                break
            case 'value':
                arr = row.map((electron) => electron.energy)
                break
            case 'atom':
                arr = periodicTable.elements.map(
                    (atom) => `${atom.number} ${atom.symbol}`,
                )
                break
            case 'string':
                arr = row.map((electron) => electron.toString())
                break
        }
        arr.push(...Array(this.max).fill(NaN))
        return arr.slice(1, this.max)
    }

    public getChartData(): [ChartOptions<'line'>, ChartData<'line'>] {
        const datasets: ChartDataset<'line'>[] = []
        const values: number[] = []
        // only visible and non-combined terms
        this.filter((term) => term.visible && !term.isCombination).forEach(
            (term) => {
                term.forEach((row, rowIndex) => {
                    // console.log(row)
                    if (this.chartType !== 'close') {
                        const data: number[] = this.getRowValues(
                            this.chartType,
                            term,
                            row,
                        ) as number[]
                        values.push(...data.filter((amount) => !isNaN(amount)))

                        if (data.length === 0) {
                            return
                        }

                        datasets.push(
                            getDataset(row.toString('chart'), data, rowIndex),
                        )
                    }
                })
            },
        )

        const labels = this.getChartLabel().slice(1, this.max)

        const options: ChartOptions<'line'> = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize:
                            (Math.max(...values) - Math.min(...values)) / 10,
                    },
                },
            },
        }

        return [
            options,
            {
                labels,
                datasets,
            },
        ]
    }
}
