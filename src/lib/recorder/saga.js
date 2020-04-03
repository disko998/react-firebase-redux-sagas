import { call, takeLatest, all, take, put } from 'redux-saga/effects'
import { RecorderActionType } from './action'

import {
  startRecordingAudioWorker,
  stopRecordingAudioWorker,
  channelAudio,
} from './worker'

function* watchStartRecordingAudio() {
  yield takeLatest(RecorderActionType.RECORD_AUDIO_START, startRecordingAudioWorker)
}

function* watchStopRecordingAudio() {
  yield takeLatest(RecorderActionType.RECORD_AUDIO_STOP, stopRecordingAudioWorker)
}

export function* watchAudioChannel() {
  while (true) {
    const action = yield take(channelAudio)
    yield put(action)
  }
}

export default function* recorderSagas() {
  yield all([
    call(watchStartRecordingAudio),
    call(watchStopRecordingAudio),
    call(watchAudioChannel),
  ])
}
