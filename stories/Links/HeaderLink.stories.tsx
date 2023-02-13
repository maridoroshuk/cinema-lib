import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeaderLink } from '@/components/Links/HeaderLink';

export default {
  title: 'Links/HeaderLink',
  component: HeaderLink,
} as ComponentMeta<typeof HeaderLink>;

const Template: ComponentStory<typeof HeaderLink> = (args) => (
  <HeaderLink {...args}>{args.children}</HeaderLink>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Home',
};
