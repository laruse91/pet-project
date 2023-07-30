import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('render with text', () => {
    render(<Button>Кнопка</Button>)
    expect(screen.getByText('Кнопка')).toBeInTheDocument()
  })
  test('render variant text', () => {
    render(<Button variant='text'>Кнопка</Button>)
    expect(screen.getByText('Кнопка')).toHaveClass('btn-text')
  })
})
