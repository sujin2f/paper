import { Nullable } from 'src/common/types'
import { Action } from 'src/frontend/store/store'
import { Container } from 'src/model/Container'

export const SET_CONTAINER = 'ether/v1/SET_CONTAINER'
export const SET_DIGIT = 'ether/v1/SET_DIGIT'
export const SET_DESMOS = 'ether/v1/SET_DESMOS'
export const SET_VERSION = 'ether/v1/SET_VERSION'

export const setContainer = (container: Nullable<Container>): Action => {
    return {
        type: SET_CONTAINER,
        container,
    }
}

export const setDigit = (digit: number): Action => {
    return {
        type: SET_DIGIT,
        digit,
    }
}

export const setDesmos = (desmos: boolean): Action => {
    return {
        type: SET_DESMOS,
        desmos,
    }
}

export const setVersion = (): Action => {
    return {
        type: SET_VERSION,
    }
}
