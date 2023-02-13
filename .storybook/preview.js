import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';
import GlobalStyle from '../src/theme/globalStyles';

addDecorator((story) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: theme.colors.pageBackground,
      },
      {
        name: 'purple',
        value: theme.colors.purple,
      },
      {
        name: 'portal',
        value: theme.colors.lightGreyTransparent,
      },
    ],
  },
};
