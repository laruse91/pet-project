import React from 'react'
import { AppLink } from 'shared/ui/AppLink'
import { classNames } from 'shared/lib'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cl from './Navbar.module.scss'

type Props = {
  className?: string
}

export const Navbar = ({ className }: Props) => {
  return (
    <nav className={classNames(cl.navbar, {}, [className])}>
      <ThemeSwitcher />

      <div className={cl.links}>
        <AppLink variant='secondary' to='/'>Главная</AppLink>
        <AppLink variant='secondary' to='/about'>О проекте</AppLink>
      </div>
    </nav>
  )
}
