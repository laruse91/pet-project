import React, { useState } from 'react'
import { classNames } from 'shared/lib'
import { Button } from 'shared/ui'
import { LocaleSwitcher } from 'widgets/LocaleSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cl from './Sidebar.module.scss'

type Props = {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleToggle = () => setCollapsed((prev) => !prev)
  return (
    <div data-testid='sidebar' className={classNames(cl.sidebar, { [cl.collapsed]: collapsed }, [className])}>
      <Button onClick={handleToggle}>toggle</Button>

      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </div>
  )
}
