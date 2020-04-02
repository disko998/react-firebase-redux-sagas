export const UserActionTypes = {
    LOGIN_USER: 'LOGIN_USER',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',
    REGISTER_USER: 'REGISTER_USER',
    REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
    REGISTER_USER_FAILURE: 'REGISTER_USER_FAILURE',
    CHECK_USER_SESSION: 'CHECK_USER_SESSION',
    CHECK_USER_SESSION_FINISH: 'CHECK_USER_SESSION_FINISH',
    LOGOUT_USER: 'LOGOUT_USER',
    LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS',
    LOGOUT_USER_FAILURE: 'LOGOUT_USER_FAILURE',
    LOGIN_WITH_GOOGLE: 'LOGIN_WITH_GOOGLE',
    LOGIN_WITH_FACEBOOK: 'LOGIN_WITH_FACEBOOK',
    LOGIN_WITH_GITHUB: 'LOGIN_WITH_GITHUB',
    UPDATE_USER: 'UPDATE_USER',
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
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

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
})

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT_USER,
})

export const logoutUserSuccess = () => ({
    type: UserActionTypes.LOGOUT_USER_SUCCESS,
})

export const logoutUserFailure = errorMessage => ({
    type: UserActionTypes.LOGOUT_USER_FAILURE,
    payload: errorMessage,
})

export const checkUserSessionFinish = () => ({
    type: UserActionTypes.CHECK_USER_SESSION_FINISH,
})

export const loginWithGoogle = () => ({
    type: UserActionTypes.LOGIN_WITH_GOOGLE,
})

export const loginWithFacebook = () => ({
    type: UserActionTypes.LOGIN_WITH_FACEBOOK,
})

export const loginWithGithub = () => ({
    type: UserActionTypes.LOGIN_WITH_GITHUB,
})

export const updateUser = partialData => ({
    type: UserActionTypes.UPDATE_USER,
    payload: partialData,
})

export const updateUserSuccess = user => ({
    type: UserActionTypes.UPDATE_USER_SUCCESS,
    payload: user,
})

export const updateUserFailure = errorMessage => ({
    type: UserActionTypes.UPDATE_USER_FAILURE,
    payload: errorMessage,
})
