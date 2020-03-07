import React from 'react'
import { Typography, Toolbar, AppBar, Container } from '@material-ui/core'

import { UserMenu } from 'app/components'
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
                        <UserMenu />
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
