import React from 'react'
import { Typography, Toolbar, AppBar, Container } from '@material-ui/core'
import { connect } from 'react-redux'

import { UserMenu } from 'app/components'
import { useStyles } from './styles'
import { selectCurrentUser } from 'lib/user/selector'

export function NavbarComponent({ user }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Container maxWidth='md'>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant='h6' className={classes.title}>
                            {user.displayName}
                        </Typography>
                        <UserMenu />
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

const mapStateToProps = state => ({
    user: selectCurrentUser(state),
})

export const Navbar = connect(mapStateToProps)(NavbarComponent)
