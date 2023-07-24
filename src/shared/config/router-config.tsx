import { AboutPage } from 'pages/about-page'
import { MainPage } from 'pages/main-page'
import { NotFoundPage } from 'pages/not-found-page'
import { RouteProps } from 'react-router-dom'

export const ROUTE = {
  MAIN: '/',
  ABOUT: '/about',
  NOT_FOUND: '/not-found',
} as const

export type Routes = typeof ROUTE[keyof typeof ROUTE]

export const routerConfig: Record<Routes, RouteProps> = {
  [ROUTE.MAIN]: {
    path: ROUTE.MAIN,
    element: <MainPage />,
  },
  [ROUTE.ABOUT]: {
    path: ROUTE.ABOUT,
    element: <AboutPage />,
  },
  [ROUTE.NOT_FOUND]: {
    path: '/*',
    element: <NotFoundPage />,
  },
}
