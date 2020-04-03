import React from 'react'
import { Container } from '@material-ui/core'

import { Navbar, JokesList, Recorder, UploadJokeModal } from 'app/components'

export const MainPage = () => (
  <div>
    <Navbar />
    <Container maxWidth="md">
      <JokesList />
      <Recorder />
    </Container>
    <UploadJokeModal />
  </div>
)
