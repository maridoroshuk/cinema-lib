import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tooltip } from '@/components/Tooltip';

import { Wrapper } from './styles';

export default {
  title: 'Tooltip/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Wrapper>
    <Tooltip>{args.children}</Tooltip>
  </Wrapper>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Please enter the valid email',
};
