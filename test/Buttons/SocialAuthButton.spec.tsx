import React from 'react';
import { render } from '@testing-library/react';

import { SocialAuthButton } from '@/components/Buttons/SocialAuthButton';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('SocialAuthButton', () => {
  it('renders google button', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <SocialAuthButton variant="google" handleButtonClick={handleClick} />,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders facebook button', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <SocialAuthButton variant="facebook" handleButtonClick={handleClick} />,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders github button', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <SocialAuthButton variant="github" handleButtonClick={handleClick} />,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
