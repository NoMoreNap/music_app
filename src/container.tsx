import React from 'react'
import Main from './blocks/main'
import BarContent from './blocks/bar'

function Container (): JSX.Element {
  return <div className='container'>
    <main className='main'><Main/></main>
    <div className='bar'><BarContent /></div>
    <footer className="footer"></footer>
  </div>
}

export default Container
