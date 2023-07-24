import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => (

  <Routes>
    { Object.values(routerConfig).map(({ element, ...props }) => (
      <Route
        {...props}
        key={props.path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className='content-wrapper'>
              { element }
            </div>
          </Suspense>
        )}
      />
    )) }
  </Routes>
)
