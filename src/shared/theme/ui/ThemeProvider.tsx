import React, {ReactNode, useMemo, useState} from 'react'
import {ThemeContext} from './ThemeContext'
import {LS} from 'shared/constants'
import {Theme} from '../lib'

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
