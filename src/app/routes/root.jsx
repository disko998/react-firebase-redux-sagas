import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { MainPage, AuthPage, LoadingPage, NotFound } from 'app/pages'
import { selectLoading, selectCurrentUser, checkUserSession } from 'lib/user'

function RootStackComponent({ userLoading, user, checkForUserSession }) {
  useEffect(() => {
    checkForUserSession()
  }, [checkForUserSession])

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
  checkForUserSession: () => dispatch(checkUserSession()),
})

export const RootStack = connect(mapStateToProps, mapDispatchToProps)(RootStackComponent)
