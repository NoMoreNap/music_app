import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'
import Container from './container'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.querySelector('.wrapper') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>
)

reportWebVitals()
