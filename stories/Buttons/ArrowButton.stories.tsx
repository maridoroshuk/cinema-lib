import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArrowButton } from '@/components/Buttons/ArrowButton';

export default {
  title: 'Buttons/ArrowButton',
  component: ArrowButton,
} as ComponentMeta<typeof ArrowButton>;

const Template: ComponentStory<typeof ArrowButton> = (args) => (
  <ArrowButton {...args} />
);

export const Primary = Template.bind({});
