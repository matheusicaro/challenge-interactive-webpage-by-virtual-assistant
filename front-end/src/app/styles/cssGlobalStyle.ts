import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    overflow-y: scroll;
    padding: 0 !important;

    background: ${({ theme }) => theme.colors.background.primary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 21px;
    line-height: 32px;
  }
`;
