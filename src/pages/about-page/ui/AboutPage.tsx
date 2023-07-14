import React from 'react'
import {useTranslation} from 'react-i18next'

type Props = unknown
const AboutPage = ({}: Props) => {
  const {t} = useTranslation()
  return (
    <div>
      {t('О проекте')}
    </div>
  )
}
export default AboutPage
