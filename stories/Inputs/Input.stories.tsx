import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Account from '@/assets/icons/account.png';
import { Input } from '@/components/Inputs/Input';
import { Form } from '@/components/Form';

export default {
  title: 'Inputs/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Form initialValues={{ name: '' }} validate={() => {}} onFormSubmit={() => {}}>
    <Input {...args} />
  </Form>
);

export const Primary = Template.bind({});

Primary.args = {
  icon: Account,
  name: 'name',
  placeholder: 'Enter your name',
  type: 'text',
};
