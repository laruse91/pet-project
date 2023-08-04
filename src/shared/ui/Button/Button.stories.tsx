import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Кнопка',
  },
}
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Кнопка',
  },
}
export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Кнопка',
  },
}
