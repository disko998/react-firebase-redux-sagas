import { call, put, select, fork } from 'redux-saga/effects'
import { channel } from 'redux-saga'

import { recordUserJoke, db } from 'lib/firebase'
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
let unsubscribeJokesListener

export const channelAudio = channel()
export const channelJokes = channel()

export function* subscribeToJokesWorker(action) {
    try {
        unsubscribeJokesListener = db.collection('jokes').onSnapshot(
            snapshot => {
                const data = snapshot.docChanges().map(item => {
                    const joke = item.doc.data()
                    return { ...joke, id: item.doc.id }
                })
                channelJokes.put(fetchJokesSuccess(data))
            },
            err => channelJokes.put(fetchJokesFailure(err.message)),
        )
    } catch (e) {
        yield put(fetchJokesFailure(e.message))
    }
}

export function* unsubscribeFromJokesWorker(action) {
    unsubscribeJokesListener()
}

export function* startRecordingAudioWorker(action) {
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

export function* stopRecordingAudioWorker(action) {
    try {
        RECORDER.stop()
        AUDIO_STREAM.getTracks().forEach(track => track.stop())
    } catch (error) {
        console.log(error)
    }
}

// TODO: refactor this worker
export function* uploadJokeWorker(action) {
    try {
        const user = yield select(selectCurrentUser)
        const joke = yield call(recordUserJoke, user)
        yield put(uploadJokeSuccess(joke))
    } catch (e) {
        yield put(uploadJokeFailure(e.message))
    }
}
