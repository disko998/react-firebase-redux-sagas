import React from 'react'
import { Input, InputAdornment, IconButton, FormControl, InputLabel } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { useStyles } from './styles'

export const TextInput = ({ label, secure, onIconPress, id, ...otherProps }) => {
    const classes = useStyles()

    return (
        <FormControl className={classes.textField}>
            <InputLabel htmlFor='standard-adornment-password'>{label}</InputLabel>
            <Input
                fullWidth
                id={id}
                type={secure ? 'password' : 'text'}
                endAdornment={
                    onIconPress && (
                        <InputAdornment position='end'>
                            <IconButton aria-label='toggle password visibility' onClick={onIconPress}>
                                {secure ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }
                {...otherProps}
            />
        </FormControl>
    )
}
