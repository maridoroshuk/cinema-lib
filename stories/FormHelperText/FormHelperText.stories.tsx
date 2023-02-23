import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormHelperText } from '@/components/FormHelperText';

export default {
  title: 'FormHelperText/FormHelperText',
  component: FormHelperText,
} as ComponentMeta<typeof FormHelperText>;

const Template: ComponentStory<typeof FormHelperText> = (args) => (
  <FormHelperText {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  message: 'The data was updated',
};
