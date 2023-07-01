import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { AppRoutes } from './routes'

const root = ReactDOM.createRoot(
  document.querySelector('.wrapper') as HTMLElement
)

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </React.StrictMode>
)

reportWebVitals()
