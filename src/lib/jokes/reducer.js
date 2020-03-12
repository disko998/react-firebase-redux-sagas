import { JokesActionType } from './action'

const initialState = {
    data: [],
    loading: false,
    audioRecord: {
        file: null,
        isRecording: false,
        errorMessage: '',
    },
}

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case JokesActionType.FETCH_JOKES_SUCCESS:
            return { ...state, data: [...state.data, ...action.payload] }
        case JokesActionType.RECORD_AUDIO_START:
            return {
                ...state,
                audioRecord: {
                    ...state.audioRecord,
                    file: null,
                    isRecording: true,
                    errorMessage: '',
                },
            }
        case JokesActionType.RECORD_AUDIO_SUCCESS:
            return {
                ...state,
                audioRecord: {
                    ...state.audioRecord,
                    file: action.payload,
                    isRecording: false,
                    errorMessage: '',
                },
            }
        case JokesActionType.RECORD_AUDIO_STOP:
            return {
                ...state,
                audioRecord: { ...state.audioRecord, isRecording: false },
            }
        case JokesActionType.RECORD_AUDIO_FAILURE:
            return {
                ...state,
                audioRecord: {
                    ...state.audioRecord,
                    file: null,
                    isRecording: false,
                    errorMessage: action.payload,
                },
            }

        default:
            return state
    }
}
