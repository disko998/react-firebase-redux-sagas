import React from 'react'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { useStyles } from './styles'

export const FabAdd = () => {
    const classes = useStyles()

    return (
        <Fab aria-label='Add' className={classes.fab} color='primary'>
            <AddIcon />
        </Fab>
    )
}
