import React from 'react';
import { render } from '@testing-library/react';

import { ProfileButton } from '@/components/Buttons/ProfileButton';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('ProfileButton', () => {
  it('renders', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(<ProfileButton onClick={handleClick} />),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
