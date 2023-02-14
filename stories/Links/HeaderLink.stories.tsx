import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeaderLink } from '@/components/Links/HeaderLink';

import { Navlink } from './styles';

export default {
  title: 'Links/HeaderLink',
  component: HeaderLink,
} as ComponentMeta<typeof HeaderLink>;

const Template: ComponentStory<typeof HeaderLink> = (args) => (
  <HeaderLink>
    <Navlink>{args.children}</Navlink>
  </HeaderLink>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Home',
};
