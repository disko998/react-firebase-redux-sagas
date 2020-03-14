import { createSelector } from 'reselect'

export const selectRecorderFeature = state => state.recorder

export const selectAudioFile = createSelector(
    selectRecorderFeature,
    recorder => recorder.file,
)

export const selectIsRecording = createSelector(
    selectRecorderFeature,
    recorder => recorder.isRecording,
)

export const selectRecordingTime = createSelector(
    selectRecorderFeature,
    recorder => recorder.recordingTime,
)
