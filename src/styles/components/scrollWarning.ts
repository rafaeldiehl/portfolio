import styled, { keyframes } from 'styled-components';

const arrow = keyframes`
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(8px);
  }
  100% {
    transform: translateY(-8px);
  }
`;

export const Container = styled.aside`
  position: absolute;
  bottom: 4rem;
  left: 0;
  writing-mode: vertical-lr;
  text-orientation: mixed;

  display: flex;
  flex-direction: row;
  align-items: center;
  animation: ${arrow} 1.5s infinite;

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 3px;
    font-weight: 700;
  }

  .arrow {
    margin-top: 1rem;
    position: relative;

    .arrow-trail {
      height: 50px;
      width: 2px;
      background: ${props => props.theme.colors.textPrimary};
    }

    .arrow-caps {
      position: absolute;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid ${props => props.theme.colors.textPrimary};
      border-right: 2px solid ${props => props.theme.colors.textPrimary};
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }

  @media(max-width: 600px) {
    display: none;
  }
`;