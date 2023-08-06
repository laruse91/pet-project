import { StoryFn } from '@storybook/react'
import { Theme } from 'shared/theme'

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <div className={`sb-app ${theme}`}>
      <Story />
    </div>
  )
}
