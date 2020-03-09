import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'

import { TextInput } from 'app/components/text-input'
import { useStyles, Title } from './styles'
import { connect } from 'react-redux'
import { loginUser, registerUser } from 'lib/user/action'
import { selectErrorMessage } from 'lib/user/selector'

export const AuthFormComponent = ({ registerUser, loginUser, authError }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const classes = useStyles()

    const toggleShowPass = () => setShowPassword(!showPassword)
    const onTextChange = e => {
        const { value, id } = e.target
        setUserCredentials({ ...userCredentials, [id]: value })
    }
    const onLogin = e => {
        e.preventDefault()
        loginUser(userCredentials)
    }
    const onRegister = () => {
        registerUser(userCredentials)
    }

    return (
        <Box boxShadow={3} className={classes.formWrapper}>
            <form className={classes.form} onSubmit={onLogin}>
                <Title variant='h4'>Login</Title>
                <TextInput
                    value={userCredentials.email}
                    error={Boolean(authError)}
                    label={'Email'}
                    id='email'
                    onChange={onTextChange}
                />
                <TextInput
                    value={userCredentials.password}
                    error={Boolean(authError)}
                    label={'Password'}
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

const mapStateToProps = state => ({
    authError: selectErrorMessage(state),
})

const mapDispatchToProps = dispatch => ({
    loginUser: credentials => dispatch(loginUser(credentials)),
    registerUser: credentials => dispatch(registerUser(credentials)),
})

export const AuthForm = connect(mapStateToProps, mapDispatchToProps)(AuthFormComponent)
