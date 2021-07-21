import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding-top: 3.75rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > .flex-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .descriptive {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 7rem;
      }

      button {
        font-size: 0.9rem;
        margin-top: 2rem;
      }

      p {
        width: 90%;
        margin-top: 1rem;
        max-width: 500px;
      }
    }
  }
`;