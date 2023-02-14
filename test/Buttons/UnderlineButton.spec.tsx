import React from 'react';
import { render } from '@testing-library/react';

import { HighlightedButton } from '@/components/Buttons/HighlightedButton';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('UnderlineButton', () => {
  it('renders', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <HighlightedButton handleButtonClick={handleClick}>
          Settings
        </HighlightedButton>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
