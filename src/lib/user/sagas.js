import { call, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { UserActionTypes } from './action'

import { loginUser, registerUser } from './worker'

function* watchLoginUser() {
    yield takeLatest(UserActionTypes.LOGIN_USER, loginUser)
}

function* watchRegisterUser() {
    yield takeLatest(UserActionTypes.REGISTER_USER, registerUser)
}

export default function* userSagas() {
    yield all([call(watchLoginUser), call(watchRegisterUser)])
}
