import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'

import { TextInput } from '../text-input'
import { useStyles, Title } from './styles'
import { connect } from 'react-redux'
import { loginUser, registerUser } from 'lib/user/action'

export const AuthFormComponent = ({ registerUser, loginUser }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [userCredentials, setUserCredentials] = useState({ username: '', password: '' })

    const classes = useStyles()

    const toggleShowPass = () => setShowPassword(!showPassword)
    const onTextChange = e => {
        const { value, id } = e.target
        setUserCredentials({ ...userCredentials, [id]: value })
    }
    const onLogin = () => {
        loginUser(userCredentials)
    }
    const onRegister = () => {
        registerUser(userCredentials)
    }

    return (
        <Box boxShadow={3} className={classes.formWrapper}>
            <form className={classes.form}>
                <Title variant='h4'>Login</Title>
                <TextInput label='Username' id='username' onChange={onTextChange} />
                <TextInput
                    label='Password'
                    id='password'
                    secure={!showPassword}
                    onIconPress={toggleShowPass}
                    onChange={onTextChange}
                />
                <Box mt={3}>
                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        startIcon={<LockOpenIcon />}
                        onClick={onLogin}
                    >
                        Login
                    </Button>
                    <Button
                        fullWidth
                        variant='outlined'
                        color='secondary'
                        className={classes.button}
                        startIcon={<AssignmentIndIcon />}
                        onClick={onRegister}
                    >
                        Register
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    loginUser: credentials => dispatch(loginUser(credentials)),
    registerUser: credentials => dispatch(registerUser(credentials)),
})

export const AuthForm = connect(null, mapDispatchToProps)(AuthFormComponent)
