import { classNames } from 'shared/utils'
import cl from './Button.module.scss'
import { ButtonProps } from './Button.type'


export const Button = ({ children, className, variant = 'text', ...props }: ButtonProps) => {
  return (
    <button className={ classNames(cl.btn, {}, [cl[`btn-${ variant }`]]) } { ...props }>
      { children }
    </button>
  )
}
