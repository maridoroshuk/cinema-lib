import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UnderlineButton } from '@/components/Buttons/UnderlineButton';

export default {
  title: 'Buttons/UnderlineButton',
  component: UnderlineButton,
} as ComponentMeta<typeof UnderlineButton>;

const Template: ComponentStory<typeof UnderlineButton> = (args) => (
  <UnderlineButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Edit Profile',
};
