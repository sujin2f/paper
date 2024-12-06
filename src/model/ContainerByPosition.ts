import { getRatio } from 'src/utils/atom'
import { Container, values } from './Container'
import { TermGroup } from './TermGroup'
import { TABLE_ROW } from 'src/types/data'
import { periodicTable } from 'src/constants/periodic-table'
import { Row } from './Row'

export class ContainerByPosition extends Container {
    public tableRows: (keyof typeof TABLE_ROW)[] = [
        'atom',
        'energy',
        'scaled',
        'k',
        'ratio',
        'k2nd',
    ]

    public chartTypes: (keyof typeof TABLE_ROW)[] = [
        'close',
        'scaled',
        'k',
        'ratio',
        'k2nd',
    ]

    public constructor(
        public rows: TermGroup[],
        public item2: TermGroup[],
        public ionReverse: number,
        public position: number,
    ) {
        if (Array.isArray(rows)) {
        }
        const items = Array.isArray(rows) ? rows : [rows]
        super(...items)
    }

    private get2ndK(term: TermGroup, row: Row) {
        return row.map((electron, index) => {
            const item2 =
                this.item2[this.indexOf(term)][term.indexOf(row)][index]
            if (electron.isNull || !item2) {
                return NaN
            }

            return (
                (1 /
                    Math.sqrt(
                        1 - 1 / (getRatio(electron.ion) * electron.energy),
                    )) *
                (getRatio(electron.ion) * item2.energy) *
                (1 -
                    1 / Math.pow(1 + electron.scaledK, 2) -
                    2 -
                    electron.scaledK)
            )
        })
    }

    public getRowValues(
        type: keyof typeof TABLE_ROW,
        term: TermGroup,
        row: Row,
    ): values[] {
        let arr: values[] = []
        switch (type) {
            case 'k2nd':
                arr = this.get2ndK(term, row)
                break
        }
        if (arr.length === 0) {
            return super.getRowValues(type, term, row)
        }
        arr.push(...Array(this.max).fill(NaN))
        return arr.slice(0, this.max)
    }

    // public get2ndRatio(term: number, row: number) {
    //     return this[term][row].map((electron, index) => {
    //         if (
    //             this[term][row][index].isNull ||
    //             !this.item2[term] ||
    //             !this.item2[term][row] ||
    //             !this.item2[term][row][index]
    //         ) {
    //             return NaN
    //         }

    //         return (
    //             ((getRydberg(getRatio(1), 0, electron.getK(true), 2, true) /
    //                 this.item2[term][row][index].energy) *
    //                 getRatio(electron.ion)) /
    //             getRatio(1)
    //         )
    //     })
    // }

    public getAddress(param: { chartType?: keyof typeof TABLE_ROW }): string {
        let chartParam =
            this.chartType !== 'close' ? `/chart/${this.chartType}` : ''
        if (param.chartType === 'close') {
            chartParam = ''
        } else if (param.chartType) {
            chartParam = `/chart/${param.chartType}`
        }

        return `/position/1/1${chartParam}`
    }

    protected getChartLabel(): string[] {
        return periodicTable.elements.map(
            (atom) => `${atom.number} ${atom.symbol}`,
        )
    }
}
