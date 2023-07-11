import React, { useState } from 'react'
import Main from './blocks/main'
import BarContent from './blocks/bar'
import delay from './static/delay'
import { ThemeContext, themes } from './effects/theme'

const { useEffect } = React

function Container (): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)
  const toggle = (): void => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
    } else setCurrentTheme(themes.dark)
  }
  useEffect(() => {
    delay(1000).then(() => {
      document.querySelectorAll('.loading').forEach(item => { item.classList.remove('loading') })
    })
  })
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggle }}>
      <div className='container'>
        <main className='main'><Main/></main>
        <div className='bar'><BarContent /></div>
        <footer className="footer"></footer>
      </div>
    </ThemeContext.Provider>
  )
}

export default Container
