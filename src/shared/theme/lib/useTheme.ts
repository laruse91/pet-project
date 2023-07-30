import { useContext } from 'react'
import { LS } from 'shared/constants'
import { THEME } from 'shared/theme'
import { ThemeContext } from '../ui'
import { Theme } from './models'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    setTheme(newTheme)
    localStorage.setItem(LS.THEME, newTheme)
  }

  return { theme, toggleTheme }
}
