import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;

  @media(min-width: 885px) {

    scroll-snap-type: y mandatory;

    > * {
      scroll-snap-align: center;
    }
  }


  @media (max-width: 600px) {
    .block-bg {
      position: absolute;
      height: 100vh;
      width: 100vw;
      background: ${props => props.theme.colors.backgroundPrimary}cc;
      z-index: 100;
      display: none;

      &.active {
        display: block;
      }
    }
  }
`;