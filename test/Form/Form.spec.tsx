import React from 'react';
import { render } from '@testing-library/react';

import { Form } from '@/components/Form';
import { Input } from '@/components/Inputs/Input';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('Form', () => {
  it('renders', () => {
    const handleValidate = jest.fn();
    const handleSubmit = jest.fn();
    const { container } = render(
      setupTestProvider(
        <Form
          initialValues={{ email: '', password: '' }}
          validate={handleValidate}
          onFormSubmit={handleSubmit}
        >
          <Input name="email" type="email" placeholder="Enter your email" />
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </Form>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
