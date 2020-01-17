import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    top: 0;
    right: 0;
    left: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }

  body {
    background-image: linear-gradient(to right, #00BFFF, #87CEFA);
    -webkit-font-smoothing: antialiased !important;
  }
`;
