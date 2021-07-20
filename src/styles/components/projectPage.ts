import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  > div {
    margin-top: 3.75rem;
    height: calc(100% -  3.75rem);
    width: 50%;
  }

  .image-container {
    background-size: cover;
    background-position: center;
  }

  .descriptive {
    z-index: 1;
    background: ${props => props.theme.colors.backgroundPrimary};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
      text-transform: uppercase;
      font-size: 1rem;
      letter-spacing: 1px;
      color: ${props => props.theme.colors.textSecondary};
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 0.2rem;
    }

    p {
      margin-top: 0.5rem;
      width: 90%;
    }

    ul {
      margin-top: 1rem;
      list-style: none;
      display: flex;
      max-width: 25rem;
      flex-wrap: wrap;
      justify-content: center;

      li {
        padding: 0.5rem;
        margin: 0.2rem;
        border: 2px solid ${props => props.theme.colors.backgroundSecondary};

        border-radius: 6px;
      }
    }

    button {
      margin-top: 1.6rem;
      background: ${props => props.theme.colors.backgroundSecondary};
      border: none;
      display: flex;
      padding: 1rem;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.colors.textSecondary};
      transition: .5s;

      svg {
        font-size: 1.4rem;
        margin-right: 0.5rem;
      }

      &:hover {
        filter: brightness(150%);
        border-radius: 0;
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    height: auto;

    > div {
      width: 100%;
      
      &:first-child {
        height: 100vh;
      }

      &:last-child {
        display: none;
      }
    }
  }
`;