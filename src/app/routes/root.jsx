import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { MainPage, AuthPage } from 'app/pages'
import { withSpinner } from 'app/components'
import { selectCurrentUser } from 'lib/user/selector'
import { connect } from 'react-redux'
import { checkUserSession } from 'lib/user/action'

export function RootStackComponent({ user, checkUserSession }) {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

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

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
})

export const RootStack = withSpinner(
    connect(mapStateToProps, mapDispatchToProps)(RootStackComponent),
)
