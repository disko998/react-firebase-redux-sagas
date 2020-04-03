import React from 'react'
import { CircularProgress } from '@material-ui/core'

import { SpinnerWrapper } from './styles'

export const LoadingPage = () => (
  <SpinnerWrapper>
    <CircularProgress color='secondary' />
  </SpinnerWrapper>
)
