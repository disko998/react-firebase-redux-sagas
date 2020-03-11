import React from 'react'
import { Container } from '@material-ui/core'

import { Navbar, SearchBar, JokesList, RecordJokeButton } from 'app/components'

export const MainPage = () => (
    <div>
        <Navbar />
        <Container maxWidth='md'>
            <SearchBar />
            <JokesList />
        </Container>
        <RecordJokeButton />
    </div>
)
