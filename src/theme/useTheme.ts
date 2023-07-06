import {Theme, ThemeContext} from './ThemeContext'
import {useContext} from 'react'
import {LS} from '../constants'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LS.THEME, newTheme)
  }

  return {theme, toggleTheme}
}
