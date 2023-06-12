import React from 'react'
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { AbButton } from '../src'

const meta: Meta<typeof AbButton> = {
  title: 'Components/AdButton',
  component: AbButton,
};

export default meta;
type Story = StoryObj<typeof AbButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};