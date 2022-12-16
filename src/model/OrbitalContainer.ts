import { Nullable } from 'src/types/common'
import { ContainerAbstract } from './ContainerAbstract'
import { RawData } from './RawData'

export class OrbitalContainer extends ContainerAbstract {
    public term: Nullable<RawData>

    protected generate(groups: RawData[][]): void {
        this.getByTerm(groups, 'orbital')
    }
}
