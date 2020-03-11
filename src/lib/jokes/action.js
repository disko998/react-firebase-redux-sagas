export const JokesActionType = {
    UPLOAD_JOKE: 'UPLOAD_JOKE',
    UPLOAD_JOKE_SUCCESS: 'UPLOAD_JOKE_SUCCESS',
    UPLOAD_JOKE_fAILURE: 'UPLOAD_JOKE_fAILURE',
    FETCH_JOKES: 'FETCH_JOKES',
    FETCH_JOKES_SUCCESS: 'FETCH_JOKES_SUCCESS',
    FETCH_JOKES_FAILURE: 'FETCH_JOKES_FAILURE',
}

export const uploadJoke = () => ({
    type: JokesActionType.UPLOAD_JOKE,
})

export const uploadJokeSuccess = joke => ({
    type: JokesActionType.UPLOAD_JOKE_SUCCESS,
    payload: joke,
})

export const uploadJokeFailure = errorMessage => ({
    type: JokesActionType.UPLOAD_JOKE_fAILURE,
    payload: errorMessage,
})

export const fetchJokes = () => ({
    type: JokesActionType.FETCH_JOKES,
})

export const fetchJokesSuccess = jokes => ({
    type: JokesActionType.FETCH_JOKES_SUCCESS,
    payload: jokes,
})

export const fetchJokesFailure = errorMessage => ({
    type: JokesActionType.FETCH_JOKES_FAILURE,
    payload: errorMessage,
})
