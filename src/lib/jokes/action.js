export const JokesActionType = {
    UPLOAD_JOKE: 'UPLOAD_JOKE',
    UPLOAD_JOKE_SUCCESS: 'UPLOAD_JOKE_SUCCESS',
    UPLOAD_JOKE_fAILURE: 'UPLOAD_JOKE_fAILURE',
    SUBSCRIBE_JOKES_CHANNEL: 'SUBSCRIBE_JOKES_CHANNEL',
    UNSUBSCRIBE_JOKES_CHANNEL: 'UNSUBSCRIBE_JOKES_CHANNEL',
    FETCH_JOKES_SUCCESS: 'FETCH_JOKES_SUCCESS',
    FETCH_JOKES_FAILURE: 'FETCH_JOKES_FAILURE',
    TOGGLE_LIKE: 'TOGGLE_LIKE',
    TOGGLE_LIKE_SUCCESS: 'TOGGLE_LIKE_SUCCESS',
    TOGGLE_LIKE_FAILURE: 'TOGGLE_LIKE_FAILURE',
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

export const toggleLike = jokeId => ({
    type: JokesActionType.TOGGLE_LIKE,
    payload: jokeId,
})

export const toggleLikeSuccess = () => ({
    type: JokesActionType.TOGGLE_LIKE_SUCCESS,
})

export const toggleLikeFailure = errorMessage => ({
    type: JokesActionType.TOGGLE_LIKE_FAILURE,
    payload: errorMessage,
})
