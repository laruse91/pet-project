import React, {ReactNode, useMemo, useState} from 'react'
import {Theme, ThemeContext} from './ThemeContext'
import {LS} from '../constants'

type Props = {
  children: ReactNode
}

const defaultTheme = localStorage.getItem(LS.THEME) as Theme || Theme.LIGHT

export const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const value = useMemo(() => ({theme, setTheme}), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
