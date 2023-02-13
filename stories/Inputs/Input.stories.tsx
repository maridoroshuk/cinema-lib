import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Account from '@/assets/icons/account.png';
import { Input } from '@/components/Inputs/Input';

export default {
  title: 'Inputs/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  icon: Account,
  name: 'name',
  placeholder: 'Enter your name',
  type: 'text',
};
