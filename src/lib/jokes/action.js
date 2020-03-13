export const JokesActionType = {
    UPLOAD_JOKE: 'UPLOAD_JOKE',
    UPLOAD_JOKE_SUCCESS: 'UPLOAD_JOKE_SUCCESS',
    UPLOAD_JOKE_fAILURE: 'UPLOAD_JOKE_fAILURE',
    SUBSCRIBE_JOKES_CHANNEL: 'SUBSCRIBE_JOKES_CHANNEL',
    UNSUBSCRIBE_JOKES_CHANNEL: 'UNSUBSCRIBE_JOKES_CHANNEL',
    FETCH_JOKES_SUCCESS: 'FETCH_JOKES_SUCCESS',
    FETCH_JOKES_FAILURE: 'FETCH_JOKES_FAILURE',
    RECORD_AUDIO_START: 'RECORD_AUDIO_START',
    RECORD_AUDIO_STOP: 'RECORD_AUDIO_STOP',
    RECORD_AUDIO_SUCCESS: 'RECORD_AUDIO_SUCCESS',
    RECORD_AUDIO_FAILURE: 'RECORD_AUDIO_FAILURE',
    CLEAR_AUDIO_RECORD: 'CLEAR_AUDIO_RECORD',
}

// UPLOAD JOKE
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

// JOKES CHANNEL
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

// AUDIO RECORDING
export const startRecordingAudio = () => ({
    type: JokesActionType.RECORD_AUDIO_START,
})

export const stopRecordingAudio = () => ({
    type: JokesActionType.RECORD_AUDIO_STOP,
})

export const recordAudioSuccess = audio => ({
    type: JokesActionType.RECORD_AUDIO_SUCCESS,
    payload: audio,
})

export const recordAudioFailure = errorMessage => ({
    type: JokesActionType.RECORD_AUDIO_FAILURE,
    payload: errorMessage,
})

export const clearAudioRecord = () => ({
    type: JokesActionType.CLEAR_AUDIO_RECORD,
})
