import React, {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {Component} from './components/Component'
import './styles/index.scss'
import {AboutPageLazy} from './pages/about-page'
import {MainPageLazy} from './pages/main-page'
import {useTheme} from './theme'
import {classNames} from './utils'

type Props = unknown

export const App = ({}: Props) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О проекте</Link>

      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy/>}/>
          <Route path="/about" element={<AboutPageLazy/>}/>
        </Routes>
      </Suspense>
      <Component/>
    </div>
  )
}
