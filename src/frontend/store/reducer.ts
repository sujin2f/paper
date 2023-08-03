import {
    SET_DIGIT,
    SET_ORBITAL,
    SET_ETHER,
    SET_RYDBERG,
    SET_FIXED,
    SET_FLOAT,
    SET_BASE,
} from 'src/frontend/store/actions'
import { Action, State } from 'src/types/store'

export const initialState: State = {
    digit: 4,
    visible: {
        orbital: true,
        ether: true,
        rydberg: true,
        fixed: true,
        float: true,
        base: true,
    },
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
                visible: {
                    ...state.visible,
                    orbital: action.orbital!,
                },
            }
        }
        case SET_ETHER: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    ether: action.ether!,
                },
            }
        }
        case SET_RYDBERG: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    rydberg: action.rydberg!,
                },
            }
        }
        case SET_FIXED: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    fixed: action.fixed!,
                },
            }
        }
        case SET_FLOAT: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    float: action.float!,
                },
            }
        }
        case SET_BASE: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    base: action.base!,
                },
            }
        }
        default: {
            return state
        }
    }
}
