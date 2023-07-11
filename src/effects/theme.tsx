import React, { useContext } from 'react'

export interface returType {
  theme: string
  toggle: () => void
}

export const themes = {
  dark: 'dark',
  light: 'light'
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggle: () => {}

})

export const useThemeContext = (): returType => {
  const theme = useContext(ThemeContext)
  return theme
}
