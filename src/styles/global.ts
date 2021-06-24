import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secundary};
  }

  #app {
    height: 100vh;
    margin-left: 5rem;
    
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