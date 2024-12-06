import { Nullable } from 'src/common/types'
import { isEmpty } from 'src/common/utils/object'
import { Row } from 'src/model/Row'
import { getRatio, getRydberg } from 'src/utils/atom'

export class TermGroup extends Array<Row> {
    public visible = true
    // When this is false, this set is not from the base state
    private _isCombination: Nullable<boolean> = undefined
    public get isCombination() {
        if (!isEmpty(this._isCombination)) {
            return this._isCombination
        }

        this._isCombination = this[0].isCombination
        return this._isCombination
    }

    public map<U>(
        callbackfn: (value: Row, index: number, array: Row[]) => U,
        thisArg?: any,
    ): U[] {
        const top: Row[] = []
        const mixed = this.filter((row) => {
            if (row.type === 'radial') {
                top[0] = row
                return false
            }
            if (row.type === 'linear') {
                top[1] = row
                return false
            }
            return true
        })
        return [...top.filter((row) => row), ...mixed].map(callbackfn, thisArg)
    }

    public getTransforms(row: Row) {
        const element = row.find('first-value')
        const ratio = getRatio(element.ion)

        return row.map((electron) => {
            if (electron.isNull || !electron.prev || electron.prev.isNull) {
                return NaN
            }

            const rydberg = getRydberg(ratio, element.k, electron.position)
            return electron.diff / rydberg - 1
        })
    }

    public toString(): string {
        return this[0].toString()
    }
}
