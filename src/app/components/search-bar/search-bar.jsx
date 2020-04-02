import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import { Box, IconButton } from '@material-ui/core'

import { useStyles } from './styles'

export function SearchBar({ onClear, ...inputProps }) {
    const classes = useStyles()

    return (
        <Box boxShadow={3} my={2} className={classes.bar}>
            <IconButton
                className={classes.iconButton}
                edge='start'
                aria-label='remove text'
                onClick={onClear}
            >
                <CloseIcon />
            </IconButton>
            <input
                type='text'
                placeholder='Search Jokes'
                className={classes.input}
                {...inputProps}
            />
            <IconButton className={classes.iconButton} edge='start' aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}
