import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { connect } from 'react-redux'

import { JokeCard } from 'app/components'
import { selectAllJokes, subscribeJokesChannel, unsubscribeJokesChannel } from 'lib/jokes'
import { SearchBar } from 'app/components/search-bar'
import { filterString } from 'lib/utils'

export const JokesListComponent = ({
    jokes,
    subscribeJokesChannel,
    unsubscribeJokesChannel,
}) => {
    const [filter, setFilter] = useState('')

    useEffect(() => {
        subscribeJokesChannel()
        return unsubscribeJokesChannel
    }, [subscribeJokesChannel])

    const clearFilter = () => setFilter('')
    const onSearchTextChange = e => {
        setFilter(e.target.value)
    }

    const filteredJokes = jokes.filter(joke => filterString(joke.name, filter))

    return (
        <React.Fragment>
            <SearchBar
                value={filter}
                onChange={onSearchTextChange}
                onClear={clearFilter}
            />
            <Box boxShadow={3}>
                {filteredJokes.map(joke => (
                    <JokeCard joke={joke} key={joke.id} />
                ))}
            </Box>
        </React.Fragment>
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
