import React, { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { SpinnerWrapper } from './styles'

export function withSpinner(WrappedComponent) {
    return ({ ...props }) => {
        const [loading, setLoading] = useState(true)

        setTimeout(() => {
            setLoading(false)
        }, 0)

        return loading ? (
            <SpinnerWrapper>
                <CircularProgress />
            </SpinnerWrapper>
        ) : (
            <WrappedComponent {...props} />
        )
    }
}
