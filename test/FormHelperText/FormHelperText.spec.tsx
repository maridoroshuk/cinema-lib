import React from 'react';
import { render } from '@testing-library/react';

import { FormHelperText } from '@/components/FormHelperText';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('FormHelperText', () => {
  it('renders success helper text ', () => {
    const { container } = render(
      setupTestProvider(
        <FormHelperText message="The data was updated" type="success" />,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      'background-color': '#CEE3A0',
    });
  });
  it('renders info helper text ', () => {
    const { container } = render(
      setupTestProvider(<FormHelperText message="Loading" type="info" />),
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      'background-color': '#FDF8C3',
    });
  });
  it('renders fail helper text ', () => {
    const { container } = render(
      setupTestProvider(
        <FormHelperText message="The fetching is failed" type="fail" />,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      'background-color': '#F3B6A5',
    });
  });
});
