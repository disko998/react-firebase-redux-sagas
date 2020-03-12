import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import rooSaga from './saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
      })
    : compose

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const enhancers = composeEnhancers(applyMiddleware(...middlewares))

export const configureStore = () => {
    const store = createStore(rootReducer, enhancers)
    sagaMiddleware.run(rooSaga)

    return store
}
