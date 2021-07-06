import styled, { keyframes } from 'styled-components';

const flow = keyframes`
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
`;

export const Container = styled.section`
  height: 100vh;
  padding-top: 3.75rem;

  display: flex;
  justify-content: center;

  .flex-container {
    height: 100%;
    width: 90vw;
    max-width: 1400px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > section {
      width: 50%;
    }
  }

  .descriptive {
    span {
      color: ${props => props.theme.colors.textSecondary};
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 0.75rem;
      margin-top: 0.5rem;
    }

    p {
      line-height: 1.75rem;
      font-size: 1.15rem;
    }
  }

  .location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 600px) {
    .flex-container {
      flex-direction: column;

      > section {
        width: 100%;
      }
    }
  }
`;