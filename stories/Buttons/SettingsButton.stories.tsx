import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SettingsButton } from '@/components/Buttons/SettingsButton';

export default {
  title: 'Buttons/SettingsButton',
  component: SettingsButton,
} as ComponentMeta<typeof SettingsButton>;

const Template: ComponentStory<typeof SettingsButton> = (args) => (
  <SettingsButton {...args} />
);

export const Primary = Template.bind({});
