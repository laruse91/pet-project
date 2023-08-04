import React from 'react'
import cl from './Spinner.module.scss'

export const Spinner = () => (
  <div className={cl['lds-ring']}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
