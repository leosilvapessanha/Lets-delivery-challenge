import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #008498;
    --font-color: #E8E6E3;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    @media (max-width:1080px){
    font-size:93.75%;
    }

    @media (max-width:720px){
      font-size:87.5%;
    }
  }

  body, input,textarea, button {
    font-family: "Lato", sans-serif;
    color: var(--font-color);
    font-weight:400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 700;
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
