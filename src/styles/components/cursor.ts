import styled from 'styled-components';

export const Container = styled.div`
  .ring {
    position: fixed;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    border: 2px solid ${props => props.theme.colors.textSecondary};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    -webkit-transition-duration: 100ms;
    transition-duration: 100ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    will-change: width, height, transform, border;
    z-index: 999;
    pointer-events: none;
    opacity: 0.8;
  }

  .dot {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${props => props.theme.colors.textPrimary};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    z-index: 999;
    pointer-events: none;
  }

  .link {

    .ring {
      width: 3rem;
      height: 3rem;
      border-width: 3px;
      border-color: var(--red);
    }

    .dot {
      display: none;
    }
  }

  .hovered {
    .ring {
      width: 5.5rem;
      height: 5.5rem;
      border-width: 3px;
      border-color: lightgray;
      background: #ffffff;
      mix-blend-mode: difference;
      opacity: 1;
    }

    .dot {
      display: none;
    }
  }
`;