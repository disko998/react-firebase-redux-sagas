import { put } from 'redux-saga/effects'
import { channel } from 'redux-saga'

import { recordAudioFailure, recordAudioSuccess, updateRecordingTime } from './action'

let RECORDER
let AUDIO_STREAM

export const channelAudio = channel()

export function* startRecordingAudioWorker() {
  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      AUDIO_STREAM = yield navigator.mediaDevices.getUserMedia({ audio: true })
    } else {
      throw new Error('Media is not supported on this device!')
    }

    RECORDER = new MediaRecorder(AUDIO_STREAM)
    const audioChunk = []
    RECORDER.ondataavailable = e => {
      audioChunk.push(e.data)
      if (RECORDER.state === 'inactive') {
        const blob = new Blob(audioChunk, { type: 'audio/mpeg-3' })
        channelAudio.put(recordAudioSuccess(blob))
      } else {
        channelAudio.put(updateRecordingTime())
      }
    }
    RECORDER.onerror = error => {
      throw error
    }

    RECORDER.start(1000)
  } catch (e) {
    AUDIO_STREAM.getTracks().forEach(track => track.stop())
    yield put(recordAudioFailure(e.message))
  }
}

export function* stopRecordingAudioWorker() {
  try {
    RECORDER.stop()
    AUDIO_STREAM.getTracks().forEach(track => track.stop())
    yield
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    yield
  }
}
