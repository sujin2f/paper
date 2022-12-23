import { RowAbstract } from 'src/model/RowAbstract'
import { Action } from 'src/types/store'

export const SET_DIGIT = 'ether/v1/SET_DIGIT'
export const SET_ORBITAL = 'ether/v1/SET_ORBITAL'
export const SET_ETHER = 'ether/v1/SET_ETHER'
export const SET_RYDBERG = 'ether/v1/SET_RYDBERG'
export const SET_DIFF = 'ether/v1/SET_DIFF'
export const SET_NTH = 'ether/v1/SET_NTH'
export const SET_PERCENT_POINT = 'ether/v1/SET_PERCENT_POINT'
export const SET_PERCENT = 'ether/v1/SET_PERCENT'
export const SET_COLLECTION = 'ether/v1/SET_COLLECTION'
export const SET_SHIFT = 'ether/v1/SET_SHIFT'
export const ADD_CART = 'ether/v1/ADD_CART'
export const REMOVE_CART = 'ether/v1/REMOVE_CART'
export const REFRESH = 'ether/v1/REFRESH'

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

export const setRydberg = (rydberg: boolean): Action => {
    return {
        type: SET_RYDBERG,
        rydberg,
    }
}

export const setDiff = (diff: boolean): Action => {
    return {
        type: SET_DIFF,
        diff,
    }
}

export const setNth = (nth: boolean): Action => {
    return {
        type: SET_NTH,
        nth,
    }
}

export const setPercentPoint = (percentPoint: boolean): Action => {
    return {
        type: SET_PERCENT_POINT,
        percentPoint,
    }
}

export const setPercent = (percent: boolean): Action => {
    return {
        type: SET_PERCENT,
        percent,
    }
}

export const setCorrection = (correction: boolean): Action => {
    return {
        type: SET_COLLECTION,
        correction,
    }
}

export const setShift = (shift: number): Action => {
    return {
        type: SET_SHIFT,
        shift,
    }
}

export const addCart = (cart: RowAbstract[]): Action => {
    return {
        type: ADD_CART,
        cart,
    }
}

export const removeCart = (cart: RowAbstract[]): Action => {
    return {
        type: REMOVE_CART,
        cart,
    }
}

export const refresh = (): Action => {
    return {
        type: REFRESH,
    }
}
