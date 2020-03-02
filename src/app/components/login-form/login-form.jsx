import React, { useState } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'

import { TextInput } from '../text-input'
import { useStyles, Title } from './styles'

export const LoginForm = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPass = () => setShowPassword(!showPassword)

    return (
        <Box boxShadow={3} className={classes.formWrapper}>
            <form style={{ width: '100%' }}>
                <Title variant='h4'>Login</Title>
                <TextInput label='Username' id='username' onChange={() => {}} />
                <TextInput
                    label='Password'
                    id='password'
                    secure={showPassword}
                    onIconPress={toggleShowPass}
                    onChange={() => {}}
                />
                <Box mt={3}>
                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        startIcon={<LockOpenIcon />}
                    >
                        Login
                    </Button>
                    <Button
                        fullWidth
                        variant='outlined'
                        color='secondary'
                        className={classes.button}
                        startIcon={<AssignmentIndIcon />}
                    >
                        Register
                    </Button>
                </Box>
            </form>
        </Box>
    )
}
