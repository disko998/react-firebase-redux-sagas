import { call, takeEvery, takeLatest, all, take, put } from 'redux-saga/effects'
import { JokesActionType } from './action'

import {
    uploadJokeWorker,
    subscribeToJokesWorker,
    unsubscribeFromJokesWorker,
    startRecordingAudioWorker,
    stopRecordingAudioWorker,
    channelAudio,
    channelJokes,
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

function* watchStartRecordingAudio() {
    yield takeLatest(JokesActionType.RECORD_AUDIO_START, startRecordingAudioWorker)
}

function* watchStopRecordingAudio() {
    yield takeLatest(JokesActionType.RECORD_AUDIO_STOP, stopRecordingAudioWorker)
}

export function* watchAudioChannel() {
    while (true) {
        const action = yield take(channelAudio)
        yield put(action)
    }
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
        call(watchStartRecordingAudio),
        call(watchStopRecordingAudio),
        call(watchAudioChannel),
        call(watchJokesChannel),
    ])
}
