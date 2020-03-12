import { UserActionTypes } from './action'

const initialState = {
    currentUser: undefined,
    loading: false,
    errorMessage: '',
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.CHECK_USER_SESSION:
        case UserActionTypes.LOGIN_USER:
        case UserActionTypes.REGISTER_USER:
            return { ...state, loading: true }

        case UserActionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                errorMessage: '',
            }

        case UserActionTypes.REGISTER_USER_FAILURE:
        case UserActionTypes.LOGIN_USER_FAILURE:
            return { ...state, loading: false, errorMessage: action.payload }

        case UserActionTypes.LOGOUT_USER_SUCCESS:
            return { ...state, currentUser: null }

        case UserActionTypes.CHECK_USER_SESSION_FINISH:
            return { ...state, loading: false }

        default:
            return state
    }
}
