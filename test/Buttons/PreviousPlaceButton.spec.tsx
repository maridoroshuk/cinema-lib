import React from 'react';
import { render } from '@testing-library/react';

import { PreviousPlace } from '@/components/Buttons/PreviousPlaceButton';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('PreviousPlaceButton', () => {
  it('renders', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(<PreviousPlace onClick={handleClick} />),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
