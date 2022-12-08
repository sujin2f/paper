// import { useQuery } from '@apollo/client'
// import { gql } from '@apollo/client'
// import { useEffect, useState } from 'react'
// import { ReturnType, queryGet } from 'src/types/ether'
// import { RawDataContainer } from 'src/types/raw-data'
// import { Param, UseData } from 'src/types/store'
// import { getValues } from 'src/utils/math'
// import { useTableParam } from './useTableParam'

// export const useEther: UseData = (variables, shift) => {
//     const { isDiagonal } = useTableParam()
//     const [rawData, setRawData] = useState<RawDataContainer>()
//     const { data, loading, error } = useQuery<ReturnType, Param>(
//         gql(queryGet),
//         {
//             variables,
//         },
//     )

//     useEffect(() => {
//         if (data) {
//             setRawData(getValues(data.ether, shift, isDiagonal))
//         }
//     }, [data, shift, isDiagonal])

//     return {
//         data: rawData,
//         loading,
//         error,
//     }
// }
