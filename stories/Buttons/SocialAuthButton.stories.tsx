import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SocialAuthButton } from '@/components/Buttons/SocialAuthButton';

export default {
  title: 'Buttons/SocialAuthButton',
  component: SocialAuthButton,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['google', 'facebook', 'github'],
    },
  },
} as ComponentMeta<typeof SocialAuthButton>;

const Template: ComponentStory<typeof SocialAuthButton> = (args) => (
  <SocialAuthButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: 'facebook',
};
