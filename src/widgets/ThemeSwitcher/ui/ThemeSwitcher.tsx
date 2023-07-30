import React from 'react'
import { ThemeSwitchIcon } from 'shared/assets'
import { THEME, useTheme } from 'shared/theme'
import { Button } from 'shared/ui'
import { classNames } from 'shared/lib'

type Props = {
  className?: string
}

export const ThemeSwitcher = ({ className }: Props) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Button className={classNames('theme-switcher', {}, [className])} onClick={toggleTheme}>
      { theme === THEME.LIGHT ? <ThemeSwitchIcon color='#FFC700' /> : <ThemeSwitchIcon color='#0115C6' /> }
    </Button>
  )
}
