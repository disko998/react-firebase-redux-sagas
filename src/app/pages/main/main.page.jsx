import React from 'react'
import { Container } from '@material-ui/core'

import { Navbar, SearchBar, TracksList, FabAdd } from '../../components'

export const MainPageComponent = () => (
    <div>
        <Navbar />
        <Container maxWidth='md'>
            <SearchBar />
            <TracksList />
            <FabAdd />
        </Container>
    </div>
)

export const MainPage = MainPageComponent
