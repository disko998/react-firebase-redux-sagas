import { RecorderActionType } from './action'
import { JokesActionType } from '../jokes'

const initialState = {
    file: null,
    isRecording: false,
    errorMessage: '',
}

export const recorderReducer = (state = initialState, action) => {
    switch (action.type) {
        case RecorderActionType.RECORD_AUDIO_START:
            return {
                ...state,
                file: null,
                isRecording: true,
                errorMessage: '',
            }

        case RecorderActionType.RECORD_AUDIO_SUCCESS:
            return {
                ...state,
                file: action.payload,
                isRecording: false,
                errorMessage: '',
            }

        case RecorderActionType.RECORD_AUDIO_STOP:
            return {
                ...state,
                isRecording: false,
            }

        case JokesActionType.UPLOAD_JOKE_SUCCESS:
        case RecorderActionType.CLEAR_AUDIO_RECORD:
            return {
                ...state,
                file: null,
                isRecording: false,
                errorMessage: '',
            }

        case RecorderActionType.RECORD_AUDIO_FAILURE:
            return {
                ...state,
                file: null,
                isRecording: false,
                errorMessage: action.payload,
            }

        default:
            return state
    }
}
