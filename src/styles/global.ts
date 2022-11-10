import { createGlobalStyle } from 'styled-components';

import fonts from '@resources/fonts';
import colors from '@resources/colors';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Xillian';
    src: url('/fonts/Xillian-Regular.otf') format('opentype');
    font-style: normal;
    font-weight: 500;  
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.latoRegular.style.fontFamily};
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: ${colors.branco};
      background: ${colors.terra};
    }
  }
`;

export default GlobalStyle;
