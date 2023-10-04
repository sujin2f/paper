import {
    SET_DIGIT,
    SET_ORBITAL,
    SET_ETHER,
    SET_ENERGY,
    SET_FIXED,
    SET_FLOAT,
} from 'src/frontend/store/actions'
import { Action, State } from 'src/types/store'

export const initialState: State = {
    digit: 4,
    visible: {
        orbital: true,
        ether: true,
        energy: true,
        fixed: true,
        float: false,
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
        case SET_ENERGY: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    energy: action.energy!,
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
        default: {
            return state
        }
    }
}
