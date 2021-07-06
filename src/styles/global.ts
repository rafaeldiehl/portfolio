import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    --red: #e6384d;
    --yellow: #F8d94f;

    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .cursorOn {
    * {
      cursor: none;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.backgroundPrimary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.scrollBar};
    border-radius: 20px;
    border: 3px solid ${props => props.theme.colors.backgroundPrimary};
  }

  body, input, textarea, button {
    font: 400 1.125rem "Roboto", sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  body {
    display: block;
    background: ${props => props.theme.colors.backgroundPrimary};
    color: ${props => props.theme.colors.textPrimary};
    transition: background .5s;
    overflow: hidden;
  }

  // breakpoints
  @media(max-width: 1500px) {
    html {
      font-size: 95%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 92.5%;
    }
  }

  @media(min-height: 850px) {
    html {
      font-size: 125%;
    }
  }

  @media(max-height: 575px) {
    html {
      font-size: 82.5%;
    }
  }

  @media(max-height: 450px) {
    html {
      font-size: 65%;
    }
  }
`;