import { createSelector } from 'reselect'

export const selectJokesFeature = state => state.jokes

export const selectAllJokes = createSelector(selectJokesFeature, jokes => jokes.data)
export const selectAudioRecord = createSelector(
    selectJokesFeature,
    jokes => jokes.audioRecord,
)
export const selectAudioFile = createSelector(
    selectAudioRecord,
    audioRecord => audioRecord.file,
)
