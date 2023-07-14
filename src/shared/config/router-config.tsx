import {RouteProps} from 'react-router-dom'
import {MainPage} from 'pages/main-page'
import {AboutPage} from 'pages/about-page'

export const ROUTE = {
  MAIN: '/',
  ABOUT: '/about'
} as const

export type Routes = typeof ROUTE[keyof typeof ROUTE]

export const routerConfig: Record<Routes, RouteProps> = {
  [ROUTE.MAIN]: {
    path: ROUTE.MAIN,
    element: <MainPage/>
  },
  [ROUTE.ABOUT]: {
    path: ROUTE.ABOUT,
    element: <AboutPage/>
  },
}
