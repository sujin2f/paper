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
    SET_LOCATION,
    ADD_CART,
    REMOVE_CART,
    SET_FORCE_UPDATE,
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
    correction: true,
    shift: 0,
    location: '',
    cart: [],
    forceUpdate: undefined,
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
                correction: action.correction!,
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
        case SET_LOCATION: {
            return {
                ...state,
                location: action.location!,
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
        case SET_FORCE_UPDATE: {
            return {
                ...state,
                forceUpdate: action.forceUpdate!,
            }
        }
        default: {
            return state
        }
    }
}
