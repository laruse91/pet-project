import { screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('render sidebar', () => {
    const WithTranslationSidebar = withTranslation()(Sidebar)
    renderWithTranslation(<WithTranslationSidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  // test('render variant text', () => {
  //   render(<Sidebar variant='text'>Кнопка</Sidebar>)
  //   expect(screen.getByText('Кнопка')).toHaveClass('btn-text')
  // })
})
