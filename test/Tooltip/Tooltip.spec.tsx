import React from 'react';
import { render } from '@testing-library/react';

import { Tooltip } from '@/components/Tooltip';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('Tooltip', () => {
  it('renders', () => {
    const { container } = render(
      setupTestProvider(<Tooltip>Required</Tooltip>),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
