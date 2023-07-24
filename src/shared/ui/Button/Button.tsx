import { classNames } from 'shared/utils'
import cl from './Button.module.scss'
import { ButtonProps } from './Button.type'

export const Button = ({ children, className, variant = 'text', type = 'button', ...props }: ButtonProps) => {
  return (
    <button type={type} className={classNames(cl.btn, {}, [cl[`btn-${variant}`], className])} {...props}>
      { children }
    </button>
  )
}
