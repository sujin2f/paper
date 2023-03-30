import {
    SET_DIGIT,
    SET_ORBITAL,
    SET_ETHER,
    SET_RYDBERG,
    SET_DIFF,
    SET_NTH,
    SET_PERCENT,
    SET_I,
    SET_X,
} from 'src/frontend/store/actions'
import { Action, State } from 'src/types/store'

export const initialState: State = {
    i: NaN,
    x: NaN,
    digit: 4,
    visible: {
        orbital: true,
        ether: true,
        rydberg: true,
        diff: true,
        nth: true,
        percent: true,
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
        case SET_DIFF: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    diff: action.diff!,
                },
            }
        }
        case SET_NTH: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    nth: action.nth!,
                },
            }
        }
        case SET_PERCENT: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    percent: action.percent!,
                },
            }
        }
        case SET_I: {
            return {
                ...state,
                i: action.i || NaN,
            }
        }
        case SET_X: {
            return {
                ...state,
                x: action.x || NaN,
            }
        }
        default: {
            return state
        }
    }
}
