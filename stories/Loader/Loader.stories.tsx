import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from '@/components/Loader';

export default {
  title: 'Loader/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  width: 20,
  height: 20,
};
