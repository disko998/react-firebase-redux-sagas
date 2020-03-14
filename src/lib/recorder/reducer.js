import { RecorderActionType } from './action'
import { JokesActionType } from '../jokes'

const initialState = {
    file: null,
    isRecording: false,
    errorMessage: '',
    recordingTime: 0,
}

export const recorderReducer = (state = initialState, action) => {
    switch (action.type) {
        case RecorderActionType.RECORD_AUDIO_START:
            return {
                ...state,
                file: null,
                isRecording: true,
                errorMessage: '',
                recordingTime: 0,
            }

        case RecorderActionType.RECORD_AUDIO_SUCCESS:
            return {
                ...state,
                file: action.payload,
                isRecording: false,
                errorMessage: '',
                recordingTime: 0,
            }

        case RecorderActionType.RECORD_AUDIO_STOP:
            return {
                ...state,
                isRecording: false,
                recordingTime: 0,
            }

        case JokesActionType.UPLOAD_JOKE_SUCCESS:
        case RecorderActionType.CLEAR_AUDIO_RECORD:
            return {
                ...state,
                file: null,
                isRecording: false,
                errorMessage: '',
                recordingTime: 0,
            }

        case RecorderActionType.RECORD_AUDIO_FAILURE:
            return {
                ...state,
                file: null,
                isRecording: false,
                errorMessage: action.payload,
                recordingTime: 0,
            }

        case RecorderActionType.UPDATE_RECORDING_TIME:
            return {
                ...state,
                recordingTime: ++state.recordingTime,
            }

        default:
            return state
    }
}
