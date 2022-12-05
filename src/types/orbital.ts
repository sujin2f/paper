import { queryItems, RawData, Param as RawDataParam } from './raw-data'

export const query = `
    query orbital($number: Int!, $ion: String!, $term: String) {
        orbital(number: $number, ion: $ion, term: $term) {
            ${queryItems}
        }
    }
    `

export type Param = RawDataParam & { term?: string }

export type ReturnType = {
    orbital: RawData[]
}
