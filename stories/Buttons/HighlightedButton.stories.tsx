import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HighlightedButton } from '@/components/Buttons/HighlightedButton';

export default {
  title: 'Buttons/HighlightedButton',
  component: HighlightedButton,
} as ComponentMeta<typeof HighlightedButton>;

const Template: ComponentStory<typeof HighlightedButton> = (args) => (
  <HighlightedButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Edit Profile',
};
