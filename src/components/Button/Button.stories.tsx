import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      name: 'variant',
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    size: {
      name: 'size',
      options: ['large', 'medium', 'small'],
      defaultValue: 'medium',
    },
    type: {
      name: 'type',
      options: ['button', 'submit'],
      defaultValue: 'button',
    },
    backgroundColor: { control: 'color' },
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
