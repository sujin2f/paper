export interface RawData {
    _id?: string
    /**
     * Atom number
     */
    number: number
    /**
     * Ion number
     */
    ion: number
    /**
     * eV
     */
    energy: number
    /**
     * Spin quantum number
     * see: https://en.wikipedia.org/wiki/Term_symbol
     */
    spin?: number
    /**
     * The total orbital angular momentum quantum number
     */
    l?: string
    /**
     * Term symbol parity
     */
    parity: boolean
    /**
     * The total electronic angular momentum quantum number
     */
    j: number
    /**
     * The electron configuration as array: i.g. [1s, 2s, 2p]
     */
    conf: string[]
}

export interface RawDataMongo extends RawData {
    ionReverse: number
    position: number
}

export type SortType = 'orbital' | 'ether'

export type URLParamData = {
    type: SortType
    atom: string
    chartType: keyof typeof TABLE_ROW
}
export type URLParamByPosition = {
    ionReverse: string
    position: string
    chartType: keyof typeof TABLE_ROW
}

export const TABLE_ROW = {
    orbital: 'Orbital',
    ether: 'Ether',
    energy: 'Energy',
    diff: 'Diff',
    transform: 'Transform',
    between: 'Between',
    scaled: 'Scaled',
    k: 'K',
    ratio: 'Ratio',
    k2nd: '2nd K',
    value: 'Value',
    close: 'close',
    atom: 'Atom',
    string: 'String',
}

export type RowType = 'radial' | 'linear' | 'ether' | 'orbital'
