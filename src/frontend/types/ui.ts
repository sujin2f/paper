export type DataType = 'orbital' | 'ether'
export type TableRowType =
    | 'Orbital'
    | 'Ether'
    | 'Energy'
    | 'E Diff'
    | 'Transform'
    | 'Between'
export type GraphType = 'transform' | 'between'
export type URLParam = {
    dataType: DataType
    atom: string
    graphType: GraphType
}
