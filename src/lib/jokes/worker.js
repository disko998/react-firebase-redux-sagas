import { call, put, select } from 'redux-saga/effects'
import { channel } from 'redux-saga'

import { recordUserJoke, db, saveAudioToStorage } from 'lib/firebase'
import { selectCurrentUser } from 'lib/user/selector'
import {
    uploadJokeSuccess,
    uploadJokeFailure,
    fetchJokesSuccess,
    fetchJokesFailure,
} from './action'

const JOKES_LIMIT = 5

let unsubscribeJokesListener

export const channelJokes = channel()

export function* subscribeToJokesWorker(action) {
    try {
        unsubscribeJokesListener = db
            .collection('jokes')
            .orderBy('createdAt', 'desc')
            .limit(JOKES_LIMIT)
            .onSnapshot(
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

export function* uploadJokeWorker(action) {
    try {
        const user = yield select(selectCurrentUser)
        const downloadURL = yield call(saveAudioToStorage, action.payload, user.id)
        const joke = yield call(recordUserJoke, user, downloadURL, action.payload)
        yield put(uploadJokeSuccess(joke))
    } catch (e) {
        yield put(uploadJokeFailure(e.message))
    }
}
