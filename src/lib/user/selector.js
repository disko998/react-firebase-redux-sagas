import { createSelector } from 'reselect'

export const selectUserFeature = state => state.user

export const selectCurrentUser = createSelector(
    selectUserFeature,
    user => user.currentUser,
)

export const selectErrorMessage = createSelector(
    selectUserFeature,
    user => user.errorMessage,
)

export const selectLoading = createSelector(selectUserFeature, user => user.loading)
