import { queryItems, RawData } from './raw-data'

export const query = `
    query ether($number: Int!, $ion: String!, $term: String) {
        ether(number: $number, ion: $ion, term: $term) {
            ${queryItems}
        }
    }
    `
export type ReturnType = {
    ether: RawData[]
}
