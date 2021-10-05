import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    variant: {
      variant: ['primary', 'secondary'],
    },
    size: {
      variant: ['large', 'medium', 'small'],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
