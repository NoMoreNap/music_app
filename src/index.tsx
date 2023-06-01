import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'
import Container from './container'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.querySelector('.wrapper') as HTMLElement
)

void fetch(location.href + 'static/tracks.json').then(async res => { return await res.json() }).then(res => {
  window.res = res
  root.render(
    <React.StrictMode>
      <Container/>
    </React.StrictMode>
  )
})

reportWebVitals()
