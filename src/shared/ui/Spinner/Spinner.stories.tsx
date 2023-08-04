import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
  },
}
