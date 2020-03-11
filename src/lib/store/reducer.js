import { combineReducers } from 'redux'

import { userReducer } from '../user/reducer'
import { jokesReducer } from '../jokes/reducer'

export default combineReducers({
    user: userReducer,
    jokes: jokesReducer,
})
