import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { muiTheme } from './styles'
import { RootStack } from './app/Router'
import './App.css'

function App() {
    return (
        <ThemeProvider theme={muiTheme}>
            <RootStack />
        </ThemeProvider>
    )
}

export default App
