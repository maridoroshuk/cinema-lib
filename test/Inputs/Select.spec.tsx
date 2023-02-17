import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, getByTestId, render } from '@testing-library/react';

import { Form } from '@/components/Form';
import { Select } from '@/components/Inputs/Select';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('Select', () => {
  const handleValidate = jest.fn();
  const handleSubmit = jest.fn();

  it('renders with female value', async () => {
    const { container } = render(
      setupTestProvider(
        <Form
          initialValues={{ gender: 'male' }}
          validate={handleValidate}
          onFormSubmit={handleSubmit}
        >
          <Select
            config={{
              name: 'gender',
              label: 'Select gender:',
              id: 'gender-select',
              options: [
                { id: 1, value: 'male' },
                { id: 2, value: 'female' },
                { id: 3, value: 'other' },
              ],
            }}
          />
        </Form>,
      ),
    );

    act(() => {
      fireEvent.change(getByTestId(container, 'select'), {
        target: { value: 'female' },
      });
    });

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveFormValues({ gender: 'female' });
  });

  it('renders', async () => {
    const { container } = render(
      setupTestProvider(
        <Form
          initialValues={{ gender: 'male' }}
          validate={handleValidate}
          onFormSubmit={handleSubmit}
        >
          <Select
            config={{
              name: 'gender',
              label: 'Select gender:',
              id: 'gender-select',
              options: [
                { id: 1, value: 'male' },
                { id: 2, value: 'female' },
                { id: 3, value: 'other' },
              ],
            }}
          />
        </Form>,
      ),
    );

    act(() => {
      fireEvent.change(getByTestId(container, 'select'), {
        target: { value: 'female' },
      });
    });

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveFormValues({ gender: 'female' });
  });
});
