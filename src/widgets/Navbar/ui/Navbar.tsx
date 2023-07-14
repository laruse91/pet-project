import React from 'react'
import {classNames} from 'shared/utils'
import {AppLink} from 'shared/ui/AppLink'
import cl from './Navbar.module.scss'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'


type Props = {
  className?: string
}

export const Navbar = ({className}: Props) => {
  return (
    <nav className={classNames(cl.navbar, {}, [className])}>
      <ThemeSwitcher/>

      <div className={cl.links}>
        <AppLink variant="secondary" to="/">Главная</AppLink>
        <AppLink variant="secondary" to="/about">О проекте</AppLink>
      </div>
    </nav>
  )
}
