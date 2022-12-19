import {createGlobalStyle} from 'styled-components'

import fontes from '@resources/fontes'
import cores from '@resources/cores'

const EstiloGlobal = createGlobalStyle`
  
  @font-face {
    font-family: 'Xillian';
    src: url('/fonts/Xillian-Regular.otf') format('opentype');
    font-style: normal;
    font-weight: 500;  
    font-display: swap;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${cores.vinho} ${cores.terra};
    text-rendering: optimizeLegibility;
    text-justify: newspaper;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: ${cores.vinho};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${cores.terra};
    border-radius: 20px;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; /*15px*/
    }
    @media (max-width: 720px) {
      font-size: 87.5%; /*14px*/
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fontes.barlowMedium.style.fontFamily};
    color: ${cores.branco};
    background: ${cores.terra};
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default EstiloGlobal
