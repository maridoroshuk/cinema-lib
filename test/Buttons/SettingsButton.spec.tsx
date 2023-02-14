import React from 'react';
import { render } from '@testing-library/react';

import { SettingsButton } from '@/components/Buttons/SettingsButton';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('SettingsButton', () => {
  it('renders', () => {
    const handleClick = jest.fn();
    const { container } = render(
      setupTestProvider(<SettingsButton onClick={handleClick} />),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
