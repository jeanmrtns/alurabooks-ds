import React from 'react'
import { Meta, StoryObj } from "@storybook/react";
import { AbCard } from '../src'

const meta: Meta<typeof AbCard> = {
  title: 'Components/AdCard',
  component: AbCard,
};

export default meta;
type Story = StoryObj<typeof AbCard>;

export const Primary: Story = {
  args: {
    children: 'Card example',
  },
};
