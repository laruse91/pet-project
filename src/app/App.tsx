import React, {Suspense} from 'react'
import './styles/index.scss'
import {useTheme} from 'shared/theme'
import {classNames} from 'shared/utils'
import {AppRouter} from 'app/router'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'

type Props = unknown

export const App = ({}: Props) => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense>
        <Navbar/>

        <div className="page-content">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}
