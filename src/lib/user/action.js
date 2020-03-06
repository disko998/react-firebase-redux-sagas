export const UserActionTypes = {
    LOGIN_USER: 'LOGIN_USER',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',
    REGISTER_USER: 'REGISTER_USER',
    REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
    REGISTER_USER_FAILURE: 'REGISTER_USER_FAILURE',
}

export const loginUser = credentials => ({
    type: UserActionTypes.LOGIN_USER,
    payload: credentials,
})

export const loginUserSuccess = user => ({
    type: UserActionTypes.LOGIN_USER_SUCCESS,
    payload: user,
})

export const loginUserFailure = errorMessage => ({
    type: UserActionTypes.LOGIN_USER_FAILURE,
    payload: errorMessage,
})

export const registerUser = credentials => ({
    type: UserActionTypes.REGISTER_USER,
    payload: credentials,
})

export const registerUserSuccess = user => ({
    type: UserActionTypes.REGISTER_USER_SUCCESS,
    payload: user,
})

export const registerUserFailure = errorMessage => ({
    type: UserActionTypes.REGISTER_USER_FAILURE,
    payload: errorMessage,
})
