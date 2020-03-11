import React, { useEffect } from 'react'
import { Box } from '@material-ui/core'
import { connect } from 'react-redux'

import { JokeCard } from 'app/components'
import {
    selectAllJokes,
    fetchJokes,
    fetchJokesSuccess,
    fetchJokesFailure,
} from 'lib/jokes'
import { db } from 'lib/firebase'

export const JokesListComponent = ({
    jokes,
    fetchJokes,
    fetchJokeFailure,
    fetchJokesSuccess,
}) => {
    let unsubscribeListener
    useEffect(() => {
        unsubscribeListener = db.collection('jokes').onSnapshot(
            snapshot => {
                const jokes = snapshot.docChanges().map(emit => {
                    const joke = emit.doc.data()
                    return { ...joke, id: emit.doc.id }
                })

                fetchJokesSuccess(jokes)
            },
            err => fetchJokeFailure(err.message),
        )

        return unsubscribeListener
    }, [])

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
    fetchJokes: () => dispatch(fetchJokes()),
    fetchJokesSuccess: joke => dispatch(fetchJokesSuccess(joke)),
    fetchJokeFailure: message => dispatch(fetchJokesFailure(message)),
})

export const JokesList = connect(mapStateToProps, dispatchToProps)(JokesListComponent)
