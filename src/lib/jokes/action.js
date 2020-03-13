export const JokesActionType = {
    UPLOAD_JOKE: 'UPLOAD_JOKE',
    UPLOAD_JOKE_SUCCESS: 'UPLOAD_JOKE_SUCCESS',
    UPLOAD_JOKE_fAILURE: 'UPLOAD_JOKE_fAILURE',
    SUBSCRIBE_JOKES_CHANNEL: 'SUBSCRIBE_JOKES_CHANNEL',
    UNSUBSCRIBE_JOKES_CHANNEL: 'UNSUBSCRIBE_JOKES_CHANNEL',
    FETCH_JOKES_SUCCESS: 'FETCH_JOKES_SUCCESS',
    FETCH_JOKES_FAILURE: 'FETCH_JOKES_FAILURE',
}

export const uploadJoke = (name, audio) => ({
    type: JokesActionType.UPLOAD_JOKE,
    payload: {
        name,
        audio,
    },
})

export const uploadJokeSuccess = joke => ({
    type: JokesActionType.UPLOAD_JOKE_SUCCESS,
    payload: joke,
})

export const uploadJokeFailure = errorMessage => ({
    type: JokesActionType.UPLOAD_JOKE_fAILURE,
    payload: errorMessage,
})

export const subscribeJokesChannel = () => ({
    type: JokesActionType.SUBSCRIBE_JOKES_CHANNEL,
})

export const unsubscribeJokesChannel = () => ({
    type: JokesActionType.UNSUBSCRIBE_JOKES_CHANNEL,
})

export const fetchJokesSuccess = jokes => ({
    type: JokesActionType.FETCH_JOKES_SUCCESS,
    payload: jokes,
})

export const fetchJokesFailure = errorMessage => ({
    type: JokesActionType.FETCH_JOKES_FAILURE,
    payload: errorMessage,
})
