import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider as ReduxProvider } from 'react-redux'

import { configureStore } from './lib/store'
import { RootStack } from './app/routes'
import { muiTheme } from './styles'
import './App.css'

function App() {
    return (
        <ReduxProvider store={configureStore()}>
            <ThemeProvider theme={muiTheme}>
                <RootStack loading={false} />
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default App
