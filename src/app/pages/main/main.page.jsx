import React from 'react'
import { Container } from '@material-ui/core'

import {
    Navbar,
    SearchBar,
    JokesList,
    RecorderButton,
    UploadJokeModal,
} from 'app/components'

export const MainPage = () => (
    <div>
        <Navbar />
        <Container maxWidth='md'>
            <SearchBar />
            <JokesList />
        </Container>
        <RecorderButton />
        <UploadJokeModal />
    </div>
)
