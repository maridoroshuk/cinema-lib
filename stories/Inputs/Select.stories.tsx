import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '@/components/Inputs/Select';
import { Form } from '@/components/Form';

export default {
  title: 'Inputs/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Form
    initialValues={{ name: '' }}
    validate={() => {}}
    onFormSubmit={() => {}}
  >
    <Select {...args} />
  </Form>
);

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
