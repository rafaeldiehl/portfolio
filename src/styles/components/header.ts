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

export const Container = styled.header`
  text-align: center;
  height: 100vh;
  padding-top: 3.75rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 5rem;
    line-height: 5rem;
    user-select: none;
  }

  p {
    font-size: 1.4rem;
    margin: 1rem 0 2rem;
    line-height: 2rem;
    max-width: 25rem;
  }

  strong {
    background: linear-gradient(
      -60deg,
      #8C0031,
      #ED3F3E,
      #EB8A3E,
      #F8C926
    );
    background-size: 300%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${flow} 3s ease-in-out infinite;
  }

  @media (max-width: 575px) {
    h1 {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`;