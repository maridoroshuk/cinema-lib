import React from 'react';
import { render } from '@testing-library/react';

import { TextLinkButton } from '@/components/Buttons/TextLinkButton';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('TextLinkButton', () => {
  it('renders with signUp value', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <TextLinkButton onClick={handleClick} value="signUp">
          Sign up please.
        </TextLinkButton>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders with logIn value', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <TextLinkButton onClick={handleClick} value="logIn">
          Login please.
        </TextLinkButton>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
