import styled from 'styled-components';

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
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    > div {
      width: 47.5%;
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

      &:last-child {
        margin-top: 1rem;
      }
    }
  }
`;