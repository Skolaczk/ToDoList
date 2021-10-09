import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import List from 'components/templates/List/List';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <List />
  </ThemeProvider>
);

export default Root;
