import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'
import { classNames } from 'shared/lib'
import cl from './ErrorComponent.module.scss'

type Props = {
  className?: string
}

export const ErrorComponent = ({ className }: Props) => {
  const { t } = useTranslation()
  const handleReload = () => {
    // eslint-disable-next-line
    location.reload()
  }

  return (

    <div className={classNames(cl['error-component'], {}, [className])}>
      <div>
        <p>{ t('Упс... Произошла непредвиденная ошибка.') }</p>
        <Button variant='filled' onClick={handleReload}>{ t('Обновить страницу') }</Button>
      </div>
    </div>
  )
}
