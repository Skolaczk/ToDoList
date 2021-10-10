import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *, *::before, *::after{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: ${({ theme }) => theme.colors.lightGray};
    overflow: hidden  ;
}
`;
