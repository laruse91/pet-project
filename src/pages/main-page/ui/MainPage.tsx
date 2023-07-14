import React from 'react'
import {useTranslation} from 'react-i18next'

type Props = unknown

const MainPage = ({}: Props) => {
  const {t} = useTranslation()
  return (
    <div>
      {t('Главная страница')}
    </div>
  )
}

export default MainPage
