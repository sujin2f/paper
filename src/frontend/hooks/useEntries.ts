// import { useContext, useEffect } from 'react'
// import { Nullable } from 'src/types/common'
// import { RawDataContainer } from 'src/types/raw-data'
// import { Context, ContextType } from '../store'
// import { setEntries } from '../store/actions'

// export const useEntries = (data: Nullable<RawDataContainer>) => {
//     const [, dispatch] = useContext(Context) as ContextType
//     useEffect(() => {
//         if (data) {
//             dispatch(setEntries(data.entries))
//         }
//     }, [data, dispatch])
// }
