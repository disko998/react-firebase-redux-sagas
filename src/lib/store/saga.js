import { call, all } from 'redux-saga/effects'

import userSagas from '../user/saga'
import jokesSagas from '../jokes/saga'
import recorderSagas from '../recorder/saga'

export default function* rootSaga() {
  yield all([call(userSagas), call(jokesSagas), call(recorderSagas)])
}
