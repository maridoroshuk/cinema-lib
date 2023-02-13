import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from '@/components/Form';
import { Input } from '@/index';

export default {
  title: 'Form/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args}>
    <Input name="email" type="email" placeholder="Enter your email" />
    <Input name="password" type="password" placeholder="Enter your password" />
  </Form>
);

export const Primary = Template.bind({});

Primary.args = {
  initialValues: {
    email: '',
    password: '',
  },
};
