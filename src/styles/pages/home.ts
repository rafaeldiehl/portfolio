import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  > * {
    scroll-snap-align: center;
  }
`;