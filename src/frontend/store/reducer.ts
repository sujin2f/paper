import {
    SET_DIGIT,
    SET_ORBITAL,
    SET_ETHER,
    SET_RYDBERG,
    SET_DIFF,
    SET_NTH,
    SET_PERCENT_POINT,
    SET_Z,
    SET_WEIGHT,
} from 'src/frontend/store/actions'
import { Action, State } from 'src/types/store'

export const initialState: State = {
    digit: 4,
    z: 1,
    orbital: true,
    ether: true,
    rydberg: true,
    diff: true,
    nth: true,
    percentPoint: true,
    weight: true,
}

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_DIGIT: {
            return {
                ...state,
                digit: action.digit!,
            }
        }
        case SET_ORBITAL: {
            return {
                ...state,
                orbital: action.orbital!,
            }
        }
        case SET_ETHER: {
            return {
                ...state,
                ether: action.ether!,
            }
        }
        case SET_RYDBERG: {
            return {
                ...state,
                rydberg: action.rydberg!,
            }
        }
        case SET_DIFF: {
            return {
                ...state,
                diff: action.diff!,
            }
        }
        case SET_NTH: {
            return {
                ...state,
                nth: action.nth!,
            }
        }
        case SET_PERCENT_POINT: {
            return {
                ...state,
                percentPoint: action.percentPoint!,
            }
        }
        case SET_Z: {
            return {
                ...state,
                z: action.z!,
            }
        }
        case SET_WEIGHT: {
            return {
                ...state,
                weight: action.weight!,
            }
        }
        default: {
            return state
        }
    }
}
