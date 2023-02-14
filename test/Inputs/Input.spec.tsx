import React from 'react';
import { render } from '@testing-library/react';

import Account from '@/assets/icons/account.png';
import { Form } from '@/components/Form';
import { Input } from '@/components/Inputs/Input';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('Input', () => {
  const handleValidate = jest.fn();
  const handleSubmit = jest.fn();

  it('renders text input with icon', () => {
    const { container } = render(
      setupTestProvider(
        <Form
          initialValues={{ name: '' }}
          validate={handleValidate}
          onFormSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            icon={Account}
          />
        </Form>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveFormValues({ name: '' });
  });
  it('renders password input without icon', () => {
    const { container } = render(
      setupTestProvider(
        <Form
          initialValues={{ password: '' }}
          validate={handleValidate}
          onFormSubmit={handleSubmit}
        >
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </Form>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveFormValues({ password: '' });
  });
});
