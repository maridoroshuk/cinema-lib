import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CloseButton } from '@/components/Buttons/CloseButton';

export default {
  title: 'Buttons/CloseButton',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Primary = Template.bind({});
