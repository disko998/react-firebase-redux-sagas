import React from 'react'
import { Grid, Container, Box } from '@material-ui/core'

import { useStyles } from './styles'
import { LoginForm } from '../../components'

export const AuthPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Container maxWidth='md'>
                <Box className={classes.wrapper}>
                    <Grid item xs={11} sm={6}>
                        <LoginForm />
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
