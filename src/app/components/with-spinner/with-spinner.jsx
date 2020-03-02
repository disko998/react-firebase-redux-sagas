import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { SpinnerWrapper } from './styles'

export function withSpinner(WrappedComponent) {
    return ({ loading, ...props }) =>
        loading ? (
            <SpinnerWrapper>
                <CircularProgress />
            </SpinnerWrapper>
        ) : (
            <WrappedComponent {...props} />
        )
}
