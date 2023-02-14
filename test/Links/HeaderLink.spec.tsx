import React from 'react';
import { render } from '@testing-library/react';

import { HeaderLink } from '@/components/Links/HeaderLink';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('HeaderLink', () => {
  it('renders', () => {
    const { container } = render(
      setupTestProvider(<HeaderLink>Home</HeaderLink>),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
