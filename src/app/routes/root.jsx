import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { MainPage, AuthPage } from 'app/pages'
import { withSpinner } from 'app/components'
import { selectCurrentUser } from 'lib/user/selector'
import { connect } from 'react-redux'

export function RootStackComponent({ user }) {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={() => (user ? <MainPage /> : <Redirect to='/login' />)}
                />
                <Route
                    exact
                    path='/login'
                    render={() => (user ? <Redirect to='/' /> : <AuthPage />)}
                />
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = state => ({
    user: selectCurrentUser(state),
})

export const RootStack = withSpinner(connect(mapStateToProps)(RootStackComponent))
