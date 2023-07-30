import React from 'react'
import { Spinner } from 'shared/ui'
import { classNames } from 'shared/lib'
import cl from './PageLoader.module.scss'

type Props = {
  className?: string
}

export const PageLoader = ({ className }: Props) => (
  <div className={classNames(cl.wrapper, {}, [className])}>
    <Spinner />
  </div>
)
