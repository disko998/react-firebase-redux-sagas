import { call, put } from 'redux-saga/effects'
import {
    loginUserSuccess,
    loginUserFailure,
    registerUserSuccess,
    registerUserFailure,
} from './action'

export function* loginUser(action) {
    try {
        yield put(loginUserSuccess(action.payload))
    } catch (e) {
        yield put(loginUserFailure(e.message))
    }
}

export function* registerUser(action) {
    try {
        yield put(registerUserSuccess(action.payload))
    } catch (e) {
        yield put(registerUserFailure(e.message))
    }
}
