import { periodicTable } from 'src/constants/periodic-table'

export const getAtom = (number: number) => {
    for (const element of periodicTable.elements) {
        if (element.number === number) {
            return element
        }
    }
}
