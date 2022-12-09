import {
    SET_DIGIT,
    SET_ORBITAL,
    SET_ETHER,
    SET_RYDBERG,
    SET_DIFF,
    SET_NTH,
    SET_PERCENT_POINT,
    SET_PERCENT,
    SET_COLLECTION,
    SET_SHIFT,
    SET_DATA,
} from 'src/frontend/store/actions'
import { Action, State } from 'src/types/store'

export const initialState: State = {
    digit: 4,
    orbital: true,
    ether: true,
    rydberg: true,
    diff: true,
    nth: true,
    percentPoint: true,
    percent: true,
    collection: true,
    shift: 0,
}

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_DIGIT: {
            if (action.digit! < 0 || action.digit! > 13) {
                return state
            }
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
        case SET_PERCENT: {
            return {
                ...state,
                percent: action.percent!,
            }
        }
        case SET_COLLECTION: {
            return {
                ...state,
                collection: action.collection!,
            }
        }
        case SET_SHIFT: {
            return {
                ...state,
                shift: action.shift!,
            }
        }
        case SET_DATA: {
            return {
                ...state,
                data: action.data!,
            }
        }
        default: {
            return state
        }
    }
}
