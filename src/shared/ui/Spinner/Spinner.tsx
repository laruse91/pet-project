import React from 'react'
import { classNames } from 'shared/lib'
import cl from './Spinner.module.scss'

type Props = {
  className?: string
}

export const Spinner = ({ className }: Props) => (
  <div className={classNames(cl['lds-ring'], {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
