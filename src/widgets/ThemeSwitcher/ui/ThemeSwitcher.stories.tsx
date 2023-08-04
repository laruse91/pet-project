import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {},
}
