import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  padding-top: 3.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .flex-container {
    height: 100%;
    width: 90vw;
    max-width: 1400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .descriptive {
    text-align: center;

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

  .skill-list {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media(max-width: 885px) {
    height: auto;
    margin-bottom: 5rem;
  }
`;