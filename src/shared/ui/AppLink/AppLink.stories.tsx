import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
  },

} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Ссылка',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Ссылка',
  },
}
