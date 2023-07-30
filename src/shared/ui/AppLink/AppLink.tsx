import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib'
import cl from './AppLink.module.scss'
import { AppLinkProps } from './AppLink.type'
import { APP_LINK_VARIANT } from './constants'

export const AppLink = ({
  className, children, variant = APP_LINK_VARIANT.PRIMARY, ...props
}: AppLinkProps) => (
  <Link {...props} className={classNames('', {}, [cl[`app-link_${variant}`], className])}>
    { children }
  </Link>
)
