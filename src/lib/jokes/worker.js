import { call, put, select, fork } from 'redux-saga/effects'

import { recordUserJoke, listenForJokes } from 'lib/firebase'
import { selectCurrentUser } from 'lib/user/selector'
import {
    uploadJokeSuccess,
    uploadJokeFailure,
    fetchJokesSuccess,
    fetchJokesFailure,
} from './action'

export function* uploadUserJoke(action) {
    try {
        const user = yield select(selectCurrentUser)
        const joke = yield call(recordUserJoke, user)
        yield put(uploadJokeSuccess(joke))
    } catch (e) {
        yield put(uploadJokeFailure(e.message))
    }
}

// TODO: jokes collection listener
export function* getJokes(action) {
    try {
        const jokes = yield fork(listenForJokes)
        yield put(fetchJokesSuccess(jokes))
    } catch (e) {
        yield put(fetchJokesFailure(e.message))
    }
}
