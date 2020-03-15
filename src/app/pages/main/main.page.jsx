import React from 'react'
import { Container } from '@material-ui/core'

import { Navbar, JokesList, RecorderButton, UploadJokeModal } from 'app/components'

export const MainPage = () => (
    <div>
        <Navbar />
        <Container maxWidth='md'>
            <JokesList />
        </Container>
        <RecorderButton />
        <UploadJokeModal />
    </div>
)
