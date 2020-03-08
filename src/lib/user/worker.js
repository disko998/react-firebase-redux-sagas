import { call, put } from 'redux-saga/effects'
import { auth, checkUsersSession } from 'lib/firebase'
import {
    loginUserSuccess,
    loginUserFailure,
    registerUserSuccess,
    registerUserFailure,
    logoutUserSuccess,
    logoutUserFailure,
} from './action'

export function* loginUser(action) {
    const { email, password } = action.payload
    try {
        const user = yield auth.signInWithEmailAndPassword(email, password)
        yield put(loginUserSuccess(user))
    } catch (e) {
        yield put(loginUserFailure(e.message))
    }
}

export function* registerUser(action) {
    const { email, password } = action.payload
    try {
        const user = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(registerUserSuccess(user))
    } catch (e) {
        yield put(registerUserFailure(e.message))
    }
}

export function* logoutUser(action) {
    try {
        yield auth.signOut()
        yield put(logoutUserSuccess())
    } catch (e) {
        yield put(logoutUserFailure(e.message))
    }
}

export function* getUser(action) {
    try {
        const user = yield checkUsersSession()
        if (!user) return
        yield put(loginUserSuccess(user))
    } catch (e) {
        yield put(loginUserSuccess(null))
    }
}
