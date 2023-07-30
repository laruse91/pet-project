import { THEME } from './constants'

export type Theme = typeof THEME[keyof typeof THEME]

export interface ThemeContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void
}
