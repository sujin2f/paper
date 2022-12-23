import { RowAbstract } from 'src/model/RowAbstract'
import { EtherRow } from 'src/model/EtherRow'
import { ContainerAbstract } from 'src/model/ContainerAbstract'

export class CartContainer extends ContainerAbstract {
    public createRow() {
        return new EtherRow()
    }

    public constructor(items: RowAbstract[]) {
        super([])
        this.items = items
    }
}
