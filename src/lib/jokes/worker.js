import { call, put, select, fork } from 'redux-saga/effects'
import { channel } from 'redux-saga'

import { recordUserJoke, listenForJokes } from 'lib/firebase'
import { selectCurrentUser } from 'lib/user/selector'
import {
    uploadJokeSuccess,
    uploadJokeFailure,
    fetchJokesSuccess,
    fetchJokesFailure,
    recordAudioFailure,
    recordAudioSuccess,
} from './action'

let RECORDER
let AUDIO_STREAM

export const channelAudio = channel()

export function* uploadUserJoke(action) {
    try {
        const user = yield select(selectCurrentUser)
        const joke = yield call(recordUserJoke, user)
        yield put(uploadJokeSuccess(joke))
    } catch (e) {
        yield put(uploadJokeFailure(e.message))
    }
}

export function* startRecordingAudio(action) {
    try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            AUDIO_STREAM = yield navigator.mediaDevices.getUserMedia({ audio: true })
        } else {
            throw new Error('Media is not supported on this device!')
        }

        RECORDER = new MediaRecorder(AUDIO_STREAM)
        RECORDER.ondataavailable = e => {
            const audioChunk = [e.data]
            if (RECORDER.state === 'inactive') {
                let blob = new Blob(audioChunk, { type: 'audio/mpeg-3' })
                channelAudio.put(recordAudioSuccess(blob))
            }
        }

        RECORDER.start()
    } catch (e) {
        yield put(recordAudioFailure(e.message))
    }
}

export function* stopRecordingAudio(action) {
    try {
        RECORDER.stop()
        AUDIO_STREAM.getTracks().forEach(track => track.stop())
    } catch (error) {
        console.log(error)
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
