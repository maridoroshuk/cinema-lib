import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Form } from '@/components/Form';
import { EmailInput } from '@/components/Inputs/EmailInput';

export default {
  title: 'Form/Subscribe',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args}>
    <EmailInput placeholder='Enter email'/>
  </Form>
);

export const Primary = Template.bind({});

Primary.args = {
  initialValues: {
    email: '',
  },
};
