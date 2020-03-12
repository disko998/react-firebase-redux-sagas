import { call, put } from 'redux-saga/effects'
import { auth, checkUsersSession, getAuthUserRef } from 'lib/firebase'
import {
    loginUserSuccess,
    loginUserFailure,
    registerUserSuccess,
    registerUserFailure,
    logoutUserSuccess,
    logoutUserFailure,
    checkUserSessionFinish,
} from './action'

export function* loginAuthUser(authUser) {
    try {
        const userRef = yield call(getAuthUserRef, authUser)
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
        yield loginAuthUser(authUser.user)
    } catch (e) {
        yield put(loginUserFailure(e.message))
    }
}

export function* loginAfterRegistration({ payload }) {
    yield loginAuthUser(payload)
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
        const authUser = yield call(checkUsersSession)
        if (!authUser) {
            yield put(checkUserSessionFinish())
            return
        }
        yield loginAuthUser(authUser)
    } catch (e) {
        yield put(checkUserSessionFinish())
    }
}
