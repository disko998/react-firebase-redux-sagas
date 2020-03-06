import { createSelector } from 'reselect'

export const selectUserFeature = state => state.user

export const selectCurrentUser = createSelector(
    selectUserFeature,
    user => user.currentUser,
)
