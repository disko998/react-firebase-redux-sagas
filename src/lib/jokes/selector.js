import { createSelector } from 'reselect'

export const selectJokesFeature = state => state.jokes

export const selectAllJokes = createSelector(selectJokesFeature, jokes => jokes.data)
export const selectIsUploading = createSelector(
  selectJokesFeature,
  jokes => jokes.uploading
)
export const selectUploadJokeError = createSelector(
  selectJokesFeature,
  jokes => jokes.errorMessage
)
