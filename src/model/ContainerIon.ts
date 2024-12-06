import { Container } from 'src/model/Container'

import { getRatioFromData, getRatioFromEquation } from 'src/utils/atom'
import { periodicTable } from 'src/constants/periodic-table'
import { ElectronStateFactory } from './ElectronState'
import { Row } from './Row'
import { TermGroup } from './TermGroup'
import { TABLE_ROW } from 'src/types/data'

export class ContainerIon extends Container {
    public tableRows: (keyof typeof TABLE_ROW)[] = ['atom', 'value']
    public chartTypes: (keyof typeof TABLE_ROW)[] = ['close', 'value']

    public constructor() {
        const values = periodicTable.elements
            .map((_, index) => {
                try {
                    return getRatioFromData(index + 1)
                } catch (e) {
                    return NaN
                }
            })
            .filter((v) => !isNaN(v))
        const electrons0 = values.map((value) =>
            ElectronStateFactory({ energy: value }),
        )
        const electrons1 = periodicTable.elements.map((_, index) =>
            ElectronStateFactory({ energy: getRatioFromEquation(index + 1) }),
        )

        const rows = [new Row(...electrons0), new Row(...electrons1)]
        const group = new TermGroup(...rows)
        super(group)
    }

    public getAddress(param: { chartType?: keyof typeof TABLE_ROW }): string {
        let chartParam =
            this.chartType !== 'close' ? `/chart/${this.chartType}` : ''
        if (param.chartType === 'close') {
            chartParam = ''
        } else if (param.chartType) {
            chartParam = `/chart/${param.chartType}`
        }

        return `/ion${chartParam}`
    }

    protected getChartLabel(): string[] {
        return periodicTable.elements.map(
            (atom) => `${atom.number} ${atom.symbol}`,
        )
    }
}
