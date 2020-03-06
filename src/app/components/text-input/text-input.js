import React from 'react'
import {
    Input,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { useStyles } from './styles'

export const TextInput = ({ label, secure, onIconPress, error, ...otherProps }) => {
    const classes = useStyles(error)

    return (
        <FormControl className={classes.textField}>
            <InputLabel className={classes.label}>{label}</InputLabel>
            <Input
                fullWidth
                type={secure ? 'password' : 'text'}
                endAdornment={
                    onIconPress && (
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={onIconPress}
                            >
                                {secure ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }
                error={error}
                {...otherProps}
            />
        </FormControl>
    )
}

TextInput.defaultProps = {
    label: 'Type something...',
    secure: false,
    onIconPress: false,
    error: false,
}
