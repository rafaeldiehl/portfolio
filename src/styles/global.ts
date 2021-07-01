import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
  }

  body, input, textarea, button {
    font: 400 1.125rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  body {
    display: block;
    background: ${props => props.theme.colors.backgroundPrimary};
    color: ${props => props.theme.colors.textPrimary};
    transition: background .5s;
    margin-top: 3.75rem;
    overflow: hidden;
  }

  @media (max-width: 500px) {
    body {
      margin-left: 0;
    }
  }

  #home {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

    > * {
      scroll-snap-align: center;
    }
  }

  // breakpoints
  @media(max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(max-height: 750px) {
    html {
      font-size: 92.75%;
    }
  }
  
  @media(max-height: 600px) {
    html {
      font-size: 86.75%;
    }
  }
`;