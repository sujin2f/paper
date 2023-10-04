import { Action } from 'src/types/store'

export const SET_DIGIT = 'ether/v1/SET_DIGIT'
export const SET_ORBITAL = 'ether/v1/SET_ORBITAL'
export const SET_ETHER = 'ether/v1/SET_ETHER'
export const SET_ENERGY = 'ether/v1/SET_ENERGY'
export const SET_FIXED = 'ether/v1/SET_FIXED'
export const SET_FLOAT = 'ether/v1/SET_FLOAT'

export const setDigit = (digit: number): Action => {
    return {
        type: SET_DIGIT,
        digit,
    }
}

export const setOrbital = (orbital: boolean): Action => {
    return {
        type: SET_ORBITAL,
        orbital,
    }
}

export const setEther = (ether: boolean): Action => {
    return {
        type: SET_ETHER,
        ether,
    }
}

export const setEnergy = (energy: boolean): Action => {
    return {
        type: SET_ENERGY,
        energy,
    }
}

export const setFixed = (fixed: boolean): Action => {
    return {
        type: SET_FIXED,
        fixed,
    }
}

export const setFloat = (float: boolean): Action => {
    return {
        type: SET_FLOAT,
        float,
    }
}
