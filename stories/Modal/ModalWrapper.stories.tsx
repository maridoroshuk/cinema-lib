import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Account from '@/assets/icons/account.png';
import { CloseButton } from '@/components/Buttons/CloseButton';
import { Form } from '@/components/Form';
import { Input } from '@/components/Inputs/Input';
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
      <CloseButton onClose={() => {}} />
      <Form
        initialValues={{ name: '' }}
        validate={() => {}}
        onFormSubmit={() => {}}
      >
        <Input
          icon={Account}
          name="name"
          placeholder="Enter your name"
          type="text"
        />
      </Form>
    </Modal>
  </Wrapper>
);

export const Primary = Template.bind({});
