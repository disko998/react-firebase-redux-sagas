import { call, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { UserActionTypes } from './action'

import {
    loginUser,
    registerUser,
    getUserSession,
    logoutUser,
    loginAfterRegistration,
    loginWithGoogleWorker,
    loginWithFacebookWorker,
    loginWithGithubWorker,
    updateUserWorker,
    uploadUserAvatarWorker,
} from './worker'

function* watchLoginUser() {
    yield takeLatest(UserActionTypes.LOGIN_USER, loginUser)
}

function* watchRegisterUser() {
    yield takeLatest(UserActionTypes.REGISTER_USER, registerUser)
}

function* watchRegisterUserSuccess() {
    yield takeLatest(UserActionTypes.REGISTER_USER_SUCCESS, loginAfterRegistration)
}

function* watchCheckUserSession() {
    yield takeEvery(UserActionTypes.CHECK_USER_SESSION, getUserSession)
}

function* watchLogoutUser() {
    yield takeEvery(UserActionTypes.LOGOUT_USER, logoutUser)
}

function* watchLoginWithGoogle() {
    yield takeEvery(UserActionTypes.LOGIN_WITH_GOOGLE, loginWithGoogleWorker)
}

function* watchLoginWithFacebook() {
    yield takeEvery(UserActionTypes.LOGIN_WITH_FACEBOOK, loginWithFacebookWorker)
}

function* watchLoginWithGithub() {
    yield takeEvery(UserActionTypes.LOGIN_WITH_GITHUB, loginWithGithubWorker)
}

function* watchUpdateUser() {
    yield takeEvery(UserActionTypes.UPDATE_USER, updateUserWorker)
}

function* watchUploadUserAvatar() {
    yield takeEvery(UserActionTypes.UPLOAD_USER_AVATAR, uploadUserAvatarWorker)
}

export default function* userSagas() {
    yield all([
        call(watchLoginUser),
        call(watchRegisterUser),
        call(watchCheckUserSession),
        call(watchLogoutUser),
        call(watchRegisterUserSuccess),
        call(watchLoginWithGoogle),
        call(watchLoginWithFacebook),
        call(watchLoginWithGithub),
        call(watchUpdateUser),
        call(watchUploadUserAvatar),
    ])
}
