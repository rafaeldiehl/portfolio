import styled, { keyframes } from 'styled-components';

const animated = keyframes`
  0% {
    font-size: 1.6rem;
  }
  50% {
    font-size: 1.5rem;
  }
  100% {
    font-size: 1.6rem;
  }
`;

export const Container = styled.aside`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  ul {
    list-style: none;

    li {
      margin: 0.75rem;

      a {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.textPrimary};
        animation: ${animated} 0.5s infinite;

        &:hover {
          color: var(--red);
        }
      }
    }
  }
`;