import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileButton } from '@/components/Buttons/ProfileButton';

export default {
  title: 'Buttons/ProfileButton',
  component: ProfileButton,
} as ComponentMeta<typeof ProfileButton>;

const Template: ComponentStory<typeof ProfileButton> = (args) => (
  <ProfileButton {...args} />
);

export const Primary = Template.bind({});
