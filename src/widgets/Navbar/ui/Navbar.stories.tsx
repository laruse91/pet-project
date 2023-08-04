import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
  },
}
