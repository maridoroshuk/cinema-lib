import React from 'react';
import { render } from '@testing-library/react';

import { SeatNumber } from '@/components/SeatNumber';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('SeatNumber', () => {
  it('renders', () => {
    const { container } = render(
      setupTestProvider(
        <SeatNumber backgroundColor="gold" index={1}>
          1
        </SeatNumber>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
