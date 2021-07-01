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

export const Container = styled.button`
  background: red;
  max-width: 20rem;
  background: linear-gradient(
      -60deg,
      #8C0031,
      #ED3F3E,
      #EB8A3E,
      #F8C926
    );
  background-size: 300%;
  border: none;

  position: relative;
  
  padding: 1rem 2rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0A0A0C;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: ${flow} 3s ease-in-out infinite;
  border-radius: 6px;
  transition: .4s;

  span {
    position: absolute;
    border: 1px solid ${props => props.theme.colors.textPrimary};
    width: 100%;
    height: 100%;
    top: -5px;
    left: -5px;
    padding: 4px;
    box-sizing: initial;
    border-radius: 10px;
    transition: .4s;
  }

  &:hover {
    border-radius: 0;
    filter: brightness(150%);

    span {
      border-radius: 0;
    }
  }
`;