import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Box } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import Logo from '../../../assets/logo.svg'

import { TextInput } from 'app/components/text-input'
import { useStyles } from './styles'
import { loginUser, registerUser } from 'lib/user/action'
import { selectErrorMessage } from 'lib/user/selector'

export const AuthFormComponent = ({ registerUser, loginUser, authError }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isRegistration, setIsRegistration] = useState(false)
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
        displayName: '',
    })

    const classes = useStyles()

    const toggleShowPass = () => setShowPassword(!showPassword)
    const onTextChange = e => {
        const { value, id } = e.target
        setUserCredentials({ ...userCredentials, [id]: value })
    }
    const onLogin = e => {
        e.preventDefault()
        isRegistration ? setIsRegistration(false) : loginUser(userCredentials)
        setUserCredentials({
            email: '',
            password: '',
            displayName: '',
        })
    }
    const onRegister = () => {
        userCredentials.displayName
            ? registerUser(userCredentials)
            : setIsRegistration(true)
        setUserCredentials({
            email: '',
            password: '',
            displayName: '',
        })
    }

    return (
        <Card elevation={2} className={classes.formWrapper}>
            <form className={classes.form} onSubmit={onLogin}>
                <div className={classes.logoWrapper}>
                    <img src={Logo} alt='logo' className={classes.logo} />
                </div>
                <TextInput
                    required={true}
                    value={userCredentials.email}
                    error={Boolean(authError)}
                    label={'Email'}
                    id='email'
                    onChange={onTextChange}
                />
                <TextInput
                    required={true}
                    value={userCredentials.password}
                    error={Boolean(authError)}
                    label={'Password'}
                    id='password'
                    secure={!showPassword}
                    onIconPress={toggleShowPass}
                    onChange={onTextChange}
                />
                {isRegistration && (
                    <TextInput
                        value={userCredentials.displayName}
                        error={Boolean(authError)}
                        label={'Display Name'}
                        id='displayName'
                        onChange={onTextChange}
                    />
                )}
                <Box mt={3}>
                    <Button
                        type='submit'
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
        </Card>
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
