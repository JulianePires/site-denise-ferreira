import { createGlobalStyle } from 'styled-components';

import fontes from '@resources/fontes';
import cores from '@resources/cores';

const EstiloGlobal = createGlobalStyle`
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
    font-family: ${fontes.latoRegular.style.fontFamily};
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
      color: ${cores.branco};
      background: ${cores.terra};
    }
  }
`;

export default EstiloGlobal;
