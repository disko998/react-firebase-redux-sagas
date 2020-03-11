import { createSelector } from 'reselect'

export const selectJokesFeature = state => state.jokes

export const selectAllJokes = createSelector(selectJokesFeature, jokes => jokes.data)
