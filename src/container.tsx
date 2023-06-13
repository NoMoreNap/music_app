import React from 'react'
import Main from './blocks/main'
import BarContent from './blocks/bar'

import delay from './static/delay'
const { useEffect } = React

function Container (): JSX.Element {
  useEffect(() => {
    delay(5000).then(() => {
      document.querySelectorAll('.loading').forEach(item => { item.classList.remove('loading') })
    })
  })
  return <div className='container'>
    <main className='main'><Main/></main>
    <div className='bar'><BarContent /></div>
    <footer className="footer"></footer>
  </div>
}

export default Container
