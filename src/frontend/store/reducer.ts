import {
    SET_CONTAINER,
    SET_DIGIT,
    SET_DESMOS,
    SET_VERSION,
} from 'src/frontend/store/actions'
import { Action, State } from 'src/frontend/store/store'

export const initialState: State = {
    container: undefined,
    digit: 4,
    desmos: false,
    version: 0,
}

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_CONTAINER: {
            return {
                ...state,
                container: action.container!,
            }
        }
        case SET_DIGIT: {
            if (action.digit! < 0 || action.digit! > 13) {
                return state
            }
            return {
                ...state,
                digit: action.digit!,
            }
        }
        case SET_DESMOS: {
            return {
                ...state,
                desmos: action.desmos!,
            }
        }
        case SET_VERSION: {
            return {
                ...state,
                version: state.version + 1,
            }
        }

        default: {
            return state
        }
    }
}
