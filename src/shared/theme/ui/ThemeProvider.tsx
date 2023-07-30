import React, { ReactNode, useMemo, useState } from 'react'
import { LS } from 'shared/constants'
import { THEME, Theme } from '../lib'
import { ThemeContext } from './ThemeContext'

type Props = {
  children: ReactNode
}

const defaultTheme = localStorage.getItem(LS.THEME) as Theme

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme || THEME.LIGHT)

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
