import React from 'react'
import {classNames} from 'shared/utils'
import {Button} from 'shared/ui'
import {useTranslation} from 'react-i18next'
import {LOCALE} from 'shared/locale'


type Props = {
  className?: string
}

export const LocaleSwitcher = ({className}: Props) => {
  const {i18n} = useTranslation()

  const handleChange = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
    <Button className={classNames('locale-switcher', {}, [className])} onClick={handleChange}>
      {i18n.language === 'ru' ? LOCALE.EN : LOCALE.RU}
    </Button>
  )
}
