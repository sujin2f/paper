import { queryItems, RawData, Param as RawDataParam } from './raw-data'

export const query = `
    query ether($number: Int!, $ion: String!, $term: String) {
        ether(number: $number, ion: $ion, term: $term) {
            ${queryItems}
        }
    }
    `
export type Param = RawDataParam & { term?: string }

export type ReturnType = {
    ether: RawData[]
}
