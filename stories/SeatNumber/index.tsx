import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SeatNumber } from '@/components/SeatNumber';

export default {
  title: 'Buttons/Button',
  component: SeatNumber,
  argTypes: {
    backgroundColor: {
      control: 'radio',
      options: ['gold', 'grey'],
    },
  },
} as ComponentMeta<typeof SeatNumber>;

const Template: ComponentStory<typeof SeatNumber> = (args) => (
  <SeatNumber {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  children: 'SeatNumber',
  backgroundColor: 'grey',
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'SeatNumber',
  backgroundColor: 'grey',
};
export const Last = Template.bind({});
Last.args = {
  backgroundColor: 'grey',
  children: 'SeatNumber',
};

export const Previous = Template.bind({});
Previous.args = {
  backgroundColor: 'grey',
  children: 'SeatNumber',
};

export const Current = Template.bind({});
Current.args = {
  backgroundColor: 'gold',
  children: 'SeatNumber',
};
