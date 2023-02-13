import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '@/components/Buttons/Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'radio',
      options: ['gold', 'white'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  size: 'medium',
  backgroundColor: 'gold',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  size: 'medium',
  backgroundColor: 'white',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  backgroundColor: 'gold',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  backgroundColor: 'gold',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  backgroundColor: 'gold',
  children: 'Button',
};
