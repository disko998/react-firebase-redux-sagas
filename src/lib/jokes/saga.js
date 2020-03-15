import { call, takeEvery, takeLatest, all, take, put } from 'redux-saga/effects'
import { JokesActionType } from './action'

import {
    uploadJokeWorker,
    subscribeToJokesWorker,
    unsubscribeFromJokesWorker,
    channelJokes,
    toggleLikeWorker,
} from './worker'

function* watchUploadJoke() {
    yield takeLatest(JokesActionType.UPLOAD_JOKE, uploadJokeWorker)
}

function* watchSubscribeJokesChannel() {
    yield takeEvery(JokesActionType.SUBSCRIBE_JOKES_CHANNEL, subscribeToJokesWorker)
}

function* watchUnsubscribeJokesChannel() {
    yield takeLatest(
        JokesActionType.UNSUBSCRIBE_JOKES_CHANNEL,
        unsubscribeFromJokesWorker,
    )
}

function* watchToggleLike() {
    yield takeLatest(JokesActionType.TOGGLE_LIKE, toggleLikeWorker)
}

export function* watchJokesChannel() {
    while (true) {
        const action = yield take(channelJokes)
        yield put(action)
    }
}
export default function* jokesSagas() {
    yield all([
        call(watchUploadJoke),
        call(watchSubscribeJokesChannel),
        call(watchUnsubscribeJokesChannel),
        call(watchJokesChannel),
        call(watchToggleLike),
    ])
}
