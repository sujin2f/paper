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
    SET_START,
    ADD_CART,
    REMOVE_CART,
    REFRESH,
} from 'src/frontend/store/actions'
import { Action, State } from 'src/types/store'

export const initialState: State = {
    digit: 4,
    shift: 0,
    render: 0,
    start: 0,
    cart: [],
    visible: {
        orbital: true,
        ether: true,
        rydberg: true,
        diff: true,
        nth: true,
        percentPoint: true,
        percent: true,
        correction: true,
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
        case SET_PERCENT_POINT: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    percentPoint: action.percentPoint!,
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
        case SET_COLLECTION: {
            return {
                ...state,
                visible: {
                    ...state.visible,
                    correction: action.correction!,
                },
            }
        }
        case SET_SHIFT: {
            return {
                ...state,
                shift: action.shift!,
            }
        }
        case SET_START: {
            return {
                ...state,
                start: action.start!,
            }
        }
        case ADD_CART: {
            return {
                ...state,
                cart: [...state.cart, ...action.cart!],
            }
        }
        case REMOVE_CART: {
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => action.cart!.indexOf(item) === -1,
                ),
            }
        }
        case REFRESH: {
            return {
                ...state,
                render: state.render + 1,
            }
        }
        default: {
            return state
        }
    }
}
