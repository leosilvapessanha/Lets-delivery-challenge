import { createGlobalStyle } from 'styled-components';

import stars from '../assets/stars.png';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #0F0F0F;
    --font-color: #E8E6E3;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    @media (max-width:1080px) {
    font-size:93.75%;
    }

    @media (max-width:720px) {
      font-size:87.5%;
    }
  }

  body, input, textarea, button {
    font-family: "Lato", sans-serif;
    color: var(--font-color);
    font-weight:400;

  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    width: 100%;
    min-height: 100vh;
    position: relative;

    &::before {
      content:"";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: 25% ;
      background-image: url(${stars});
      opacity: 0.3;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
