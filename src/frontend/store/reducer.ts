import {
    SET_DIGIT,
    SET_ORBITAL,
    SET_ETHER,
    SET_ENERGY,
    SET_TRANSFORM,
    SET_BETWEEN,
    LOAD_SCRIPT,
} from 'src/frontend/store/actions'
import { Action, State } from 'src/frontend/types/store'

export const initialState: State = {
    digit: 4,
    visible: {
        orbital: true,
        ether: true,
        energy: true,
        transform: true,
        between: true,
    },
    scriptLoader: {},
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
        case SET_TRANSFORM: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    transform: action.transform!,
                },
            }
        }
        case SET_BETWEEN: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    between: action.between!,
                },
            }
        }
        case LOAD_SCRIPT: {
            return {
                ...state,
                scriptLoader: {
                    ...state.scriptLoader,
                    [action.scriptLoader![0]]: action.scriptLoader![1],
                },
            }
        }
        default: {
            return state
        }
    }
}
