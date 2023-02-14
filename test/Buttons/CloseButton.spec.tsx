import React from 'react';
import { render } from '@testing-library/react';

import { CloseButton } from '@/components/Buttons/CloseButton';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('CloseButton', () => {
  it('renders', () => {
    const handleClose = jest.fn();
    const { container } = render(
      setupTestProvider(<CloseButton onClose={handleClose} />),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
