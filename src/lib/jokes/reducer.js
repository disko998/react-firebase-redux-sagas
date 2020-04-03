import _ from 'lodash'

import { sortByDate } from 'lib/utils'
import { JokesActionType } from './action'

const initialState = {
  data: [],
  errorMessage: '',
  uploading: false,
}

export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case JokesActionType.FETCH_JOKES_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        data: _.uniqBy([...action.payload, ...state.data].sort(sortByDate), 'id'),
      }
    case JokesActionType.UPLOAD_JOKE:
      return { ...state, uploading: true }
    case JokesActionType.UPLOAD_JOKE_fAILURE:
      return { ...state, uploading: false, errorMessage: action.payload }
    case JokesActionType.UPLOAD_JOKE_SUCCESS:
      return { ...state, uploading: false, errorMessage: '' }

    default:
      return state
  }
}
