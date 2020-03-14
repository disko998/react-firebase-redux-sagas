export const RecorderActionType = {
    RECORD_AUDIO_START: 'RECORD_AUDIO_START',
    RECORD_AUDIO_STOP: 'RECORD_AUDIO_STOP',
    RECORD_AUDIO_SUCCESS: 'RECORD_AUDIO_SUCCESS',
    RECORD_AUDIO_FAILURE: 'RECORD_AUDIO_FAILURE',
    CLEAR_AUDIO_RECORD: 'CLEAR_AUDIO_RECORD',
    UPDATE_RECORDING_TIME: 'UPDATE_RECORDING_TIME',
}

export const startRecordingAudio = () => ({
    type: RecorderActionType.RECORD_AUDIO_START,
})

export const stopRecordingAudio = () => ({
    type: RecorderActionType.RECORD_AUDIO_STOP,
})

export const recordAudioSuccess = audio => ({
    type: RecorderActionType.RECORD_AUDIO_SUCCESS,
    payload: audio,
})

export const recordAudioFailure = errorMessage => ({
    type: RecorderActionType.RECORD_AUDIO_FAILURE,
    payload: errorMessage,
})

export const clearAudioRecord = () => ({
    type: RecorderActionType.CLEAR_AUDIO_RECORD,
})

export const updateRecordingTime = time => ({
    type: RecorderActionType.UPDATE_RECORDING_TIME,
})
