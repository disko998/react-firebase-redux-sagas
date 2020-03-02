import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { MainPage, AuthPage } from '../pages'
import { withSpinner } from 'app/components'

export function RootStackComponent({ user }) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => (user ? <MainPage /> : <Redirect to='/login' />)}></Route>
                <Route exact path='/login' render={() => (user ? <Redirect to='/' /> : <AuthPage />)}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export const RootStack = withSpinner(RootStackComponent)
