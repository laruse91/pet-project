import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { AppLink } from 'shared/ui/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cl from './Navbar.module.scss'

type Props = {
  className?: string
}

export const Navbar = ({ className }: Props) => {
  const { t } = useTranslation()
  return (
    <nav className={classNames(cl.navbar, {}, [className])}>

      <div className={cl.links}>
        <AppLink variant='secondary' to='/'>{ t('Главная') }</AppLink>
        <AppLink variant='secondary' to='/about'>{ t('О проекте') }</AppLink>
      </div>
    </nav>
  )
}
