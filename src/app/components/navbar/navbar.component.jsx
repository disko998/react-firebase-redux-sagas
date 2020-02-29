import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Person from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'
import { IconButton, Button, Typography, Toolbar, AppBar, Container } from '@material-ui/core'

import { useStyles } from './styles'

export function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Container maxWidth='md'>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant='h6' className={classes.title}>
                            Audito
                        </Typography>
                        <IconButton edge='start' className={classes.userButton} color='inherit' aria-label='user'>
                            <Typography variant='button' className={classes.login}>
                                login
                            </Typography>
                            <LockIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
