import { Nullable } from 'src/types/common'
import { ContainerAbstract } from './ContainerAbstract'
import { RawData } from './RawData'
import { RowAbstract } from './RowAbstract'

export class CartContainer extends ContainerAbstract {
    term: Nullable<RawData>
    /* tslint:disable-next-line no-empty */
    protected generate(groups: RawData[][]): void {}
    public constructor(rows: RowAbstract[]) {
        super([])
        this.items = rows
    }
}
