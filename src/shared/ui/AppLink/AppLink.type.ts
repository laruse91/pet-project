import {APP_LINK_VARIANT} from './constants'
import {LinkProps} from 'react-router-dom'

export type AppLinkVariants = typeof APP_LINK_VARIANT[keyof typeof APP_LINK_VARIANT]

export type AppLinkProps = LinkProps & {
  variant?: AppLinkVariants
}
