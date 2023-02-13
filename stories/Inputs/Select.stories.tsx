import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '@/components/Inputs/Select';

export default {
  title: 'Inputs/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  config: {
    name: 'gender',
    label: 'Select gender:',
    id: 'gender-select',
    options: [
      { id: 1, value: 'male' },
      { id: 2, value: 'female' },
      { id: 3, value: 'other' },
    ],
  },
};
