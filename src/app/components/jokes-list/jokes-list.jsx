import React, { useEffect } from 'react'
import { Box } from '@material-ui/core'
import { connect } from 'react-redux'

import { JokeCard } from 'app/components'
import { selectAllJokes, subscribeJokesChannel, unsubscribeJokesChannel } from 'lib/jokes'

export const JokesListComponent = ({
    jokes,
    subscribeJokesChannel,
    unsubscribeJokesChannel,
}) => {
    useEffect(() => {
        subscribeJokesChannel()
        return unsubscribeJokesChannel
    }, [subscribeJokesChannel])

    return (
        <Box boxShadow={3}>
            {jokes.map(joke => (
                <JokeCard joke={joke} key={joke.id} />
            ))}
        </Box>
    )
}

const mapStateToProps = state => ({
    jokes: selectAllJokes(state),
})

const dispatchToProps = dispatch => ({
    subscribeJokesChannel: () => dispatch(subscribeJokesChannel()),
    unsubscribeJokesChannel: () => dispatch(unsubscribeJokesChannel()),
})

export const JokesList = connect(mapStateToProps, dispatchToProps)(JokesListComponent)
