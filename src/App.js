import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { muiTheme } from './styles'
import { RootStack } from './app/routes'
import './App.css'

function App() {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 0)

    return (
        <ThemeProvider theme={muiTheme}>
            <RootStack loading={loading} />
        </ThemeProvider>
    )
}

export default App
