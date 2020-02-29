import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MainPage } from './pages'

export function RootStack() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage}></Route>
                <Route path='/login'></Route>
            </Switch>
        </BrowserRouter>
    )
}
