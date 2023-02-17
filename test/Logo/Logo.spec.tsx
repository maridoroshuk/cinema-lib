import React from 'react';
import { render } from '@testing-library/react';

import { Logo } from '@/components/Logo';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('Logo', () => {
  it('renders small logo', () => {
    const { container } = render(setupTestProvider(<Logo size="small" />));
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      'max-width': '125px',
    });
  });
  it('renders medium logo', () => {
    const { container } = render(setupTestProvider(<Logo size="medium" />));
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      'max-width': '175px',
    });
  });
  it('renders large logo', () => {
    const { container } = render(setupTestProvider(<Logo size="large" />));
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({
      'max-width': '255px',
    });
  });
});
