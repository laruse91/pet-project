import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routerConfig} from 'shared/config'

type Props = unknown

export const AppRouter = ({}: Props) => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        {Object.values(routerConfig).map(({element, ...props}) => (
          <Route
            {...props}
            key={props.path}
            element={(
              <Suspense>
                <div className='content-wrapper'>
                  {element}
                </div>
              </Suspense>
            )}/>
        ))}
      </Routes>
    </Suspense>
  )
}
