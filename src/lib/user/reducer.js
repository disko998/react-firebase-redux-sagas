import { UserActionTypes } from './action'

const initialState = {
    currentUser: null,
    loading: false,
    errorMessage: '',
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
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

        case UserActionTypes.LOGIN_USER_FAILURE:
            return { ...state, loading: false, errorMessage: action.payload }

        case UserActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                errorMessage: '',
            }

        case UserActionTypes.REGISTER_USER_FAILURE:
            return { ...state, loading: false, errorMessage: action.payload }

        default:
            return state
    }
}
