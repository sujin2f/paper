import { chartColors } from 'src/constants/chart'
import { RawDataT } from 'src/types/raw-data'
import { ContainerAbstract } from './ContainerAbstract'
import { RawData } from './RawData'
import { RawDataRow } from './RawDataRow'

export class RawDataContainer extends ContainerAbstract {
    public createRow() {
        const row = new RawDataRow()
        row.parent = this
        return row
    }

    protected setItems(rawData: RawDataT[]) {
        super.setItems(rawData)

        const basePosition = this.getBasePosition()
        this.items.forEach((row, index) => {
            if (basePosition) {
                row.generate(basePosition)
            }
            row.color = chartColors[index] || 'rgb(200, 200, 200)'
        })
    }
}
