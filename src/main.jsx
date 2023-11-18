import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import { MyContext } from './myContext'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <MyContext.Provider value={ { name: 'Jessé Bruno Correia', email:'jesse@email.com'} }>
          <Routes />
        </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)