import React from 'react';
import { render } from '@testing-library/react';

import { Loader } from '@/components/Loader';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('Loader', () => {
  it('renders', () => {
    const { container } = render(
      setupTestProvider(<Loader color="black" width={250} height={250} />),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
