import React from 'react';
import { render } from '@testing-library/react';

import { ArrowButton } from '@/components/Buttons/ArrowButton';

import { setupTestProvider } from '../setupTests';

jest.mock('../../src/assets/icons/arrow.png', () => 'arrow-image');

describe('ArrowButton', () => {
  it('renders', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(<ArrowButton onClick={handleClick} />),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
