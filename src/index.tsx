import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@mui/material/styles'
import materialTheme from './materialTheme'
import './index.css'
import App from './App'
import { MenuOpenProvider } from './context/MenuContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={materialTheme}>
      <MenuOpenProvider>    
        <App />
      </MenuOpenProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
