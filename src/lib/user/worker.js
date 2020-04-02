import { call, put, select } from 'redux-saga/effects'
import {
    auth,
    checkUsersSession,
    getAuthUserRef,
    facebookProvider,
    googleProvider,
    githubProvider,
    updateUser,
} from 'lib/firebase'
import {
    loginUserSuccess,
    loginUserFailure,
    registerUserSuccess,
    registerUserFailure,
    logoutUserSuccess,
    logoutUserFailure,
    checkUserSessionFinish,
    updateUserSuccess,
    updateUserFailure,
} from './action'
import { selectCurrentUser } from 'lib/user/selector'

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
        if (!email.length && !password.length) {
            throw new Error('Please fill out the form')
        }
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
    const { email, password, displayName } = action.payload
    try {
        const authUser = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(registerUserSuccess({ ...authUser.user, displayName: displayName }))
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

export function* loginWithGoogleWorker() {
    try {
        const response = yield auth.signInWithPopup(googleProvider)
        yield loginAuthUser(response.user)
    } catch (e) {
        if (
            e.code === 'auth/popup-closed-by-user' ||
            e.code === 'auth/cancelled-popup-request'
        )
            return
        yield put(loginUserFailure(e.message))
    }
}

export function* loginWithFacebookWorker() {
    try {
        const response = yield auth.signInWithPopup(facebookProvider)
        yield loginAuthUser(response.user)
    } catch (e) {
        if (
            e.code === 'auth/popup-closed-by-user' ||
            e.code === 'auth/cancelled-popup-request'
        )
            return
        yield put(loginUserFailure(e.message))
    }
}

export function* loginWithGithubWorker() {
    try {
        const response = yield auth.signInWithPopup(githubProvider)
        yield loginAuthUser(response.user)
    } catch (e) {
        if (
            e.code === 'auth/popup-closed-by-user' ||
            e.code === 'auth/cancelled-popup-request'
        )
            return
        yield put(loginUserFailure(e.message))
    }
}

export function* updateUserWorker({ payload }) {
    try {
        const currentUser = yield select(selectCurrentUser)
        const user = yield call(updateUser, payload, currentUser)
        yield put(updateUserSuccess(payload))
    } catch (e) {
        yield put(updateUserFailure(e.message))
    }
}
