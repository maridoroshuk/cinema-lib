import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Logo } from '@/components/Logo';

export default {
  title: 'Logo/Logo',
  component: Logo,
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  size: 'medium',
};
