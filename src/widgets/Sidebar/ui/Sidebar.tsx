import React, {useState} from 'react'
import cl from './Sidebar.module.scss'
import {classNames} from 'shared/utils'
import {Button} from 'shared/ui'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LocaleSwitcher} from 'widgets/LocaleSwitcher'

type Props = {
  className?: string
}

export const Sidebar = ({className}: Props) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleToggle = () => setCollapsed(prev => !prev)
  return (
    <div className={classNames(cl.sidebar, {[cl.collapsed]: collapsed}, [className])}>
      <Button onClick={handleToggle}>toggle</Button>

      <div className={cl.switchers}>
        <ThemeSwitcher/>
        <LocaleSwitcher/>
      </div>
    </div>
  )
}
