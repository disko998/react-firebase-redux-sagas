import React from 'react'
import { Toolbar, AppBar, Container } from '@material-ui/core'
import { connect } from 'react-redux'

import EditIcon from '@material-ui/icons/Edit'

import { UserMenu } from 'app/components'
import { useStyles } from './styles'
import { selectCurrentUser, updateUser } from 'lib/user'

export function NavbarComponent({ user, updateUser }) {
    const [name, setName] = React.useState(user.displayName)
    const classes = useStyles()

    const onNameChange = e => {
        setName(e.target.value)
    }

    const submitName = e => {
        if (name.length < 1 || name === user.displayName) {
            setName(user.displayName)
        } else {
            updateUser({ displayName: name })
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Container maxWidth='md'>
                    <Toolbar className={classes.toolbar}>
                        <EditIcon />
                        <input
                            className={classes.displayName}
                            onChange={onNameChange}
                            value={name}
                            onBlur={submitName}
                        />
                        <UserMenu avatar={user.avatar} />
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

const mapStateToProps = state => ({
    user: selectCurrentUser(state),
})

const dispatchToProps = dispatch => ({
    updateUser: partialData => dispatch(updateUser(partialData)),
})

export const Navbar = connect(mapStateToProps, dispatchToProps)(NavbarComponent)
