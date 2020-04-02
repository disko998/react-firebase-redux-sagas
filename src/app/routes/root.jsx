import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { MainPage, AuthPage, LoadingPage, NotFound } from 'app/pages'
import { selectLoading, selectCurrentUser } from 'lib/user/selector'
import { checkUserSession } from 'lib/user/action'

function RootStackComponent({ userLoading, user, checkUserSession }) {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return userLoading ? (
        <LoadingPage />
    ) : (
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
                <Route exact path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = state => ({
    userLoading: selectLoading(state),
    user: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
})

export const RootStack = connect(mapStateToProps, mapDispatchToProps)(RootStackComponent)
