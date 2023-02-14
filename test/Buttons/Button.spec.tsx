import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '@/components/Buttons/Button';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('Button', () => {
  it('renders small button with type button', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <Button size="small" type="button" onClick={handleClick} value="signUp">
          Sign up
        </Button>,
      ),
    );
    expect(container.firstChild).toHaveAttribute('type', 'button');
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders medium button with background white', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <Button
          size="medium"
          backgroundColor="white"
          onClick={handleClick}
          value="signUp"
        >
          Sign up
        </Button>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders large button with value email and type submit', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(
        <Button size="large" value="email" type="submit" onClick={handleClick}>
          Save
        </Button>,
      ),
    );
    expect(container.firstChild).toHaveAttribute('type', 'submit');
    expect(container.firstChild).toHaveAttribute('value', 'email');
    expect(container.firstChild).toMatchSnapshot();
  });
});
