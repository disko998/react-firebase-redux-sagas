import React from 'react'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { useStyles } from './styles'

export const FabAdd = ({ onClick }) => {
    const classes = useStyles()

    return (
        <Fab onClick={onClick} aria-label='Add' className={classes.fab} color='primary'>
            <AddIcon />
        </Fab>
    )
}
