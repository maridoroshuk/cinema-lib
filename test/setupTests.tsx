import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/theme';

import '@testing-library/jest-dom';

export const setupTestProvider = (children: ReactNode) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
