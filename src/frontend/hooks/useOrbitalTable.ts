import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'
import {
    OrbitalQueryParam,
    OrbitalReturnType,
    orbitalQuery,
} from 'src/types/orbital'

export const useOrbitalTable = (variables: OrbitalQueryParam) => {
    const { data, loading, error } = useQuery<
        OrbitalReturnType,
        OrbitalQueryParam
    >(
        gql`
            ${orbitalQuery}
        `,
        { variables },
    )

    const [digit, setDigit] = useState<number>(4)
    const [showOrbital, setShowOrbital] = useState<boolean>(true)
    const [showEther, setShowEther] = useState<boolean>(true)
    const [showRydberg, setShowRydberg] = useState<boolean>(true)
    const [showDiff, setShowDiff] = useState<boolean>(true)
    const [showNth, setShowNth] = useState<boolean>(true)
    const [showPercentPoint, setPercentPoint] = useState<boolean>(true)

    return {
        orbitals: data ? data.orbital : [],
        loading,
        error,
        digit,
        setDigit,
        showOrbital,
        setShowOrbital,
        showEther,
        setShowEther,
        showRydberg,
        setShowRydberg,
        showDiff,
        setShowDiff,
        showNth,
        setShowNth,
        showPercentPoint,
        setPercentPoint,
    }
}
