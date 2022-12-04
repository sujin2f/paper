import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Param, ReturnType, query, Ether, mutationQuery } from 'src/types/ether'
import { RawData } from 'src/types/raw-data'
import { useTableParam } from './useTableParam'

export const useEther = (variables: Param) => {
    const { number, ion, term } = useTableParam()
    const { data, loading, error } = useQuery<ReturnType, Param>(gql(query), {
        variables,
    })

    const [addEther] = useMutation<Ether>(gql(mutationQuery), {
        variables: {
            ether: {} as Ether,
        },
        refetchQueries: [gql(query)],
    })

    const filterRawData = (data: RawData) => ({
        _id: data._id,
        rydberg: data.rydberg,
        term: data.term,
        j: data.j,
        conf: data.conf,
        position: data.position,
        orbital: data.orbital,
        confPrefix: data.confPrefix,
    })

    const doAddEther = (z: number, weight: number) => {
        const ether = data && data.ether
        if (!ether) {
            return
        }

        const entryPoints = ether.entryPoints.map((item) => filterRawData(item))
        const items = ether.items.map((row) => {
            if (!row) {
                return row
            }

            return {
                etherName: row.etherName,
                items: row.items.map((col) => {
                    if (!col) {
                        return col
                    }

                    return filterRawData(col)
                }),
            }
        })
        addEther({
            variables: {
                ether: {
                    ion,
                    number,
                    term,
                    z,
                    weight,
                    entryPoints,
                    items,
                },
            },
        })
    }

    return {
        ether: data && data.ether,
        addEther: doAddEther,
        loading,
        error,
    }
}
