import { useTranslation } from 'react-i18next'
import { LOCALE } from 'shared/locale'
import { Button } from 'shared/ui'
import { classNames } from 'shared/utils'

type Props = {
  className?: string
}

export function LocaleSwitcher({ className }: Props) {
  const { i18n } = useTranslation()

  const handleChange = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  return (
    <Button className={ classNames('locale-switcher', {}, [className]) } onClick={ handleChange }>
      { i18n.language === 'ru' ? LOCALE.EN : LOCALE.RU }
    </Button>
  )
}
