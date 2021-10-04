import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MenuOpenProvider } from './context/MenuContext'

ReactDOM.render(
  <React.StrictMode>
    <MenuOpenProvider>    
      <App />
    </MenuOpenProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
