import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextLinkButton } from '@/components/Buttons/TextLinkButton';

export default {
  title: 'Buttons/TextLinkButton',
  component: TextLinkButton,
} as ComponentMeta<typeof TextLinkButton>;

const Template: ComponentStory<typeof TextLinkButton> = (args) => (
  <TextLinkButton {...args}>{args.children}</TextLinkButton>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Sign up please.',
  value: 'signUp',
};
