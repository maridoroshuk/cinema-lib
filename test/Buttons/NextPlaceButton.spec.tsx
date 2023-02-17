import React from 'react';
import { render } from '@testing-library/react';

import { NextPlace } from '@/components/Buttons/NextPlaceButton';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('NextPlaceButton', () => {
  it('renders', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(<NextPlace onClick={handleClick} />),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
