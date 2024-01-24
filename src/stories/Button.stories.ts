import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon']
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button'
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Button'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Button'
  }
};
export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Button'
  }
};
export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Button'
  }
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Button'
  }
};
