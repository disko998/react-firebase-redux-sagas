import { call, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { JokesActionType } from './action'

import { uploadUserJoke, getJokes } from './worker'

function* watchUploadJoke() {
    yield takeLatest(JokesActionType.UPLOAD_JOKE, uploadUserJoke)
}

function* watchFetchJokes() {
    yield takeEvery(JokesActionType.FETCH_JOKES, getJokes)
}

export default function* jokesSagas() {
    yield all([call(watchUploadJoke), call(watchFetchJokes)])
}
