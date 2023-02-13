import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeaderLink } from '@/components/Links/HeaderLink';
import { Modal } from '@/components/Modal';

import { Wrapper } from './styles';

export default {
  title: 'Modals/Modal',
  component: Modal,
  parameters: {
    backgrounds: { default: 'portal' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Wrapper>
    <Modal {...args}>
      <HeaderLink>Home</HeaderLink>
    </Modal>
  </Wrapper>
);

export const Primary = Template.bind({});
