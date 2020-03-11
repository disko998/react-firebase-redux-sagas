import { call, takeEvery, takeLatest, all, take, put } from 'redux-saga/effects'
import { JokesActionType } from './action'

import {
    uploadUserJoke,
    getJokes,
    startRecordingAudio,
    stopRecordingAudio,
    channelAudio,
} from './worker'

function* watchUploadJoke() {
    yield takeLatest(JokesActionType.UPLOAD_JOKE, uploadUserJoke)
}

function* watchFetchJokes() {
    yield takeEvery(JokesActionType.FETCH_JOKES, getJokes)
}

function* watchStartRecordingAudio() {
    yield takeEvery(JokesActionType.RECORD_AUDIO_START, startRecordingAudio)
}

function* watchStopRecordingAudio() {
    yield takeEvery(JokesActionType.RECORD_AUDIO_STOP, stopRecordingAudio)
}

export function* watchRedirectChannel() {
    while (true) {
        const action = yield take(channelAudio)
        yield put(action)
    }
}

export default function* jokesSagas() {
    yield all([
        call(watchUploadJoke),
        call(watchFetchJokes),
        call(watchStartRecordingAudio),
        call(watchStopRecordingAudio),
        call(watchRedirectChannel),
    ])
}
