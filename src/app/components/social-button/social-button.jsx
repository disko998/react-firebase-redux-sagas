import React from 'react'
import { Fab } from '@material-ui/core'

import { useStyles } from './styles'

export const SocialButton = ({ onClick, name, icon }) => {
    const classes = useStyles()
    return (
        <Fab onClick={onClick} aria-label={`${name} login`} className={classes.fab}>
            <img src={icon} alt={`${name} icon`} className={classes.icon} />
        </Fab>
    )
}
