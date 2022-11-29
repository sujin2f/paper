import { getOrbital } from 'src/utils/mongo/orbital'
import { OrbitalQueryParam, Orbital } from 'src/types/orbital'

export const orbital = async (param: OrbitalQueryParam): Promise<Orbital[]> => {
    const { atom, ion } = param
    return await getOrbital(atom, ion)
}
