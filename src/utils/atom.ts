import { periodicTable } from 'src/constants/periodic-table'

export const getAtom = (atomNumber: number) => {
    for (const element of periodicTable.elements) {
        if (element.number === atomNumber) {
            return element
        }
    }
}
