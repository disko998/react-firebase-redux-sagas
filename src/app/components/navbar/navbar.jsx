import React from 'react'
import { IconButton, Typography, Toolbar, AppBar, Container, Button } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

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
                        <IconButton onClick={() => console.log('Person click')} className={classes.userButton}>
                            <AccountCircleIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
