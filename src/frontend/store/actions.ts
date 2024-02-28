import { Nullable } from 'src/common/types'
import { Action } from 'src/frontend/types/store'
import { Container } from 'src/model/Container'

export const SET_DATA_CONTAINER = 'ether/v1/SET_DATA_CONTAINER'
export const SET_DIGIT = 'ether/v1/SET_DIGIT'
export const SET_ORBITAL = 'ether/v1/SET_ORBITAL'
export const SET_ETHER = 'ether/v1/SET_ETHER'
export const SET_ENERGY = 'ether/v1/SET_ENERGY'
export const SET_TRANSFORM = 'ether/v1/SET_TRANSFORM'
export const SET_BETWEEN = 'ether/v1/SET_BETWEEN'

export const setDataContainer = (container: Nullable<Container>): Action => {
    return {
        type: SET_DATA_CONTAINER,
        container,
    }
}

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

export const setTransform = (transform: boolean): Action => {
    return {
        type: SET_TRANSFORM,
        transform,
    }
}

export const setBetween = (between: boolean): Action => {
    return {
        type: SET_BETWEEN,
        between,
    }
}
