import React from 'react'
import cl from './Spinner.module.scss'

type Props = unknown

export const Spinner = ({}: Props) => (
  <div className={cl['lds-ring']}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
