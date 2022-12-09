import { ContainerAbstract } from './ContainerAbstract'
import { OrbitalRow } from './OrbitalRow'
import { RawData } from './RawData'

export class OrbitalContainer extends ContainerAbstract {
    protected generate(groups: RawData[][]): void {
        this.getByTerm(groups, 'orbital')
    }
}

// \left(\frac{1}{1.0002293716}\right)^{2}-\left(\frac{1}{1+1.0002293716}\right)^{2}
