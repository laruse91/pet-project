import type { Preview } from '@storybook/react'
import { ThemeDecorator, RouterDecorator } from 'shared/config'
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
  },
  decorators: [ThemeDecorator('light'), RouterDecorator],
}

export default preview
