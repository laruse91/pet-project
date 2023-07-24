import { ButtonHTMLAttributes } from 'react'
import { BUTTON_VARIANT } from './constants'

export type ButtonVariants = typeof BUTTON_VARIANT[keyof typeof BUTTON_VARIANT]

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}
