import { queryItems, RawDataContainer } from './raw-data'

export const query = `
    query ether($number: Int!, $ion: String!, $term: String) {
        ether(number: $number, ion: $ion, term: $term) {
            ${queryItems}
        }
    }
    `
export type ReturnType = {
    ether: RawDataContainer
}
