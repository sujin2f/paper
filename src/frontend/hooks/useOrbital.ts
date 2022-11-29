import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import {
    OrbitalQueryParam,
    OrbitalReturnType,
    orbitalQuery,
} from 'src/types/orbital'

export const useOrbital = (variables: OrbitalQueryParam) => {
    const { data, loading, error } = useQuery<
        OrbitalReturnType,
        OrbitalQueryParam
    >(
        gql`
            ${orbitalQuery}
        `,
        {
            variables,
        },
    )
    return { orbitals: data ? data.orbital : [], loading, error }
}
