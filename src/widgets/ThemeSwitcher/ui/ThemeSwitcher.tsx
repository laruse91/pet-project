import React from 'react'
import {classNames} from 'shared/utils'
import {Theme, useTheme} from 'shared/theme'
import {Button} from 'shared/ui'
import {ThemeSwitchIcon} from 'shared/assets'

type Props = {
  className?: string
}

export const ThemeSwitcher = ({className}: Props) => {
  const {toggleTheme, theme} = useTheme()

  return (
    <Button className={classNames('theme-switcher', {}, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <ThemeSwitchIcon color="#FFC700"/> : <ThemeSwitchIcon color="#0115C6"/>}
    </Button>
  )
}
