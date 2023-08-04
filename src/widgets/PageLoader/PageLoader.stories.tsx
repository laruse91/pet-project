import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  parameters: {
    layout: 'centered',
    // actions: {
    //   variant: ['text', 'primary'],
    // },
  },
  tags: ['autodocs'],

  // argTypes: {
  //   variant: { control: 'text' || 'primary' },
  // },
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
  },
}
