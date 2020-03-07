import { call, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { UserActionTypes } from './action'

import { loginUser, registerUser, getUser, logoutUser } from './worker'

function* watchLoginUser() {
    yield takeLatest(UserActionTypes.LOGIN_USER, loginUser)
}

function* watchRegisterUser() {
    yield takeLatest(UserActionTypes.REGISTER_USER, registerUser)
}

function* watchCheckUserSession() {
    yield takeEvery(UserActionTypes.CHECK_USER_SESSION, getUser)
}

function* watchLogoutUser() {
    yield takeEvery(UserActionTypes.LOGOUT_USER, logoutUser)
}

export default function* userSagas() {
    yield all([
        call(watchLoginUser),
        call(watchRegisterUser),
        call(watchCheckUserSession),
        call(watchLogoutUser),
    ])
}
