import React from 'react'
import { Container } from '@material-ui/core'

import { Navbar, SearchBar, TracksList } from '../../components'

export const MainPage = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth='md'>
                <SearchBar />
                <TracksList />
            </Container>
        </div>
    )
}
