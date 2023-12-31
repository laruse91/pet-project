import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {},
}
