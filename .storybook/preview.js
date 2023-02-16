import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme, darkTheme } from '@/theme/theme';
import GlobalStyle from '@/theme/globalStyles';

addDecorator((story) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{...theme, ...lightTheme}}>{story()}</ThemeProvider>
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
        value: darkTheme.colors.neutral900,
      },
    ],
  },
};
