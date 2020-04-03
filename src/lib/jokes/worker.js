import { call, put, select } from 'redux-saga/effects'
import { channel } from 'redux-saga'

import {
  recordUserJoke,
  db,
  saveAudioToStorage,
  updateJokeLikesTransaction,
} from 'lib/firebase'
import { selectCurrentUser } from 'lib/user/selector'
import {
  uploadJokeSuccess,
  uploadJokeFailure,
  fetchJokesSuccess,
  fetchJokesFailure,
  toggleLikeSuccess,
  toggleLikeFailure,
} from './action'
import { JOKES_LIMIT } from './const'

let unsubscribeJokesListener

export const channelJokes = channel()

export function* subscribeToJokesWorker() {
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
        err => channelJokes.put(fetchJokesFailure(err.message))
      )
  } catch (e) {
    yield put(fetchJokesFailure(e.message))
  }
}

export function* unsubscribeFromJokesWorker() {
  yield unsubscribeJokesListener()
}

export function* uploadJokeWorker(action) {
  try {
    const { name, audio } = action.payload

    if (!name.length && audio.type === 'audio/mpeg-3') {
      throw new Error('Please provide valid data')
    }

    const user = yield select(selectCurrentUser)
    const downloadURL = yield call(saveAudioToStorage, action.payload, user.id)
    const joke = yield call(recordUserJoke, user, downloadURL, action.payload)
    yield put(uploadJokeSuccess(joke))
  } catch (e) {
    yield put(uploadJokeFailure(e.message))
  }
}

export function* toggleLikeWorker(action) {
  try {
    const user = yield select(selectCurrentUser)
    yield call(updateJokeLikesTransaction, action.payload, user.id)
    yield put(toggleLikeSuccess())
  } catch (error) {
    yield put(toggleLikeFailure(error.message))
  }
}
