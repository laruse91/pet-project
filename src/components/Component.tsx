import React from 'react'
import cl from './Component.module.scss'

type Props = unknown

export const Component = ({}: Props) => {
  return (
    <div className={cl.btn}>
      привет
    </div>
  )
}
