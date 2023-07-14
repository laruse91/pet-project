import React from 'react'
import {Link} from 'react-router-dom'
import {APP_LINK_VARIANT} from './constants'
import {AppLinkProps} from './AppLink.type'
import cl from './AppLink.module.scss'
import {classNames} from 'shared/utils'


export const AppLink = ({className, children, variant = APP_LINK_VARIANT.PRIMARY, ...props}: AppLinkProps) => {

  return (
    <Link {...props} className={classNames(cl['app-link'], {}, [cl[`app-link_${variant}`], className])}>
      {children}
    </Link>
  )
}
