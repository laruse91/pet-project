import type { Preview } from '@storybook/react'
import { ThemeDecorator, RouterDecorator } from '../../src/shared/config'
import '../../src/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    parameters: {
      backgrounds: {
        default: 'light',
        values: [
          {
            name: 'light',
            value: '#e8e8ea',
          },
          {
            name: 'dark',
            value: '#090949',
          },
        ],
      },
    },
  },
  decorators: [ThemeDecorator('light'), RouterDecorator],
}

export default preview
