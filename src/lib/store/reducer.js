import { combineReducers } from 'redux'

import { userReducer } from '../user/reducer'
import { jokesReducer } from '../jokes/reducer'
import { recorderReducer } from '../recorder/reducer'

export default combineReducers({
    user: userReducer,
    jokes: jokesReducer,
    recorder: recorderReducer,
})
