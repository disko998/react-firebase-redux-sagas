import { call, put } from 'redux-saga/effects'
import { auth, checkUsersSession, getUserRef } from 'lib/firebase'
import {
    loginUserSuccess,
    loginUserFailure,
    registerUserSuccess,
    registerUserFailure,
    logoutUserSuccess,
    logoutUserFailure,
    checkUserSessionSuccess,
} from './action'

export function* getAuthUser(user) {
    try {
        const userRef = yield call(getUserRef, user)
        const userSnapshot = yield userRef.get()
        yield put(loginUserSuccess({ id: userRef.id, ...userSnapshot.data() }))
    } catch (e) {
        yield put(loginUserFailure(e.message))
    }
}

export function* loginUser(action) {
    const { email, password } = action.payload
    try {
        const authUser = yield auth.signInWithEmailAndPassword(email, password)
        yield getAuthUser(authUser.user)
    } catch (e) {
        yield put(loginUserFailure(e.message))
    }
}

export function* loginAfterRegistration({ payload }) {
    yield getAuthUser(payload)
}

export function* registerUser(action) {
    const { email, password } = action.payload
    try {
        const authUser = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(registerUserSuccess(authUser.user))
    } catch (e) {
        yield put(registerUserFailure(e.message))
    }
}

export function* logoutUser() {
    try {
        yield auth.signOut()
        yield put(logoutUserSuccess())
    } catch (e) {
        yield put(logoutUserFailure(e.message))
    }
}

export function* getUserSession() {
    try {
        const authUser = yield checkUsersSession()
        if (!authUser) {
            yield put(checkUserSessionSuccess())
            return
        }
        yield getAuthUser(authUser)
    } catch (e) {
        yield put(checkUserSessionSuccess())
    }
}
