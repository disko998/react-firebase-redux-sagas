import React from 'react'
import { Container } from '@material-ui/core'

import { Navbar, SearchBar, JokesList, FabAdd } from 'app/components'
import { connect } from 'react-redux'
import { uploadJoke } from 'lib/jokes'

export const MainPageComponent = ({ uploadJoke }) => (
    <div>
        <Navbar />
        <Container maxWidth='md'>
            <SearchBar />
            <JokesList />
        </Container>
        <FabAdd onClick={uploadJoke} />
    </div>
)

const dispatchToProps = dispatch => ({
    uploadJoke: () => dispatch(uploadJoke()),
})

export const MainPage = connect(null, dispatchToProps)(MainPageComponent)
