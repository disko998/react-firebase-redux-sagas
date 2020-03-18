import React from 'react'
import { Grid, Container, Box } from '@material-ui/core'

import { AuthForm, GitHubCorner } from 'app/components'
import { useStyles } from './styles'

export const AuthPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Container maxWidth='md'>
                <Box className={classes.wrapper}>
                    <Grid item xs={11} sm={6}>
                        <AuthForm />
                    </Grid>
                </Box>
            </Container>
            <GitHubCorner />
        </div>
    )
}
