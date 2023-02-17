import React from 'react';
import { render } from '@testing-library/react';

import { Modal } from '@/components/Modal';

import 'jest-styled-components';

import { setupTestProvider } from '../setupTests';

describe('Modal', () => {
  it('renders', () => {
    const { container } = render(
      setupTestProvider(
        <Modal>
          <p>Modal Text</p>
        </Modal>,
      ),
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
