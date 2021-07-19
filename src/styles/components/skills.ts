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
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .arrow {
      border: none;
      font-size: 1.5rem;
      margin: 1.5rem;
      background: ${props => props.theme.colors.backgroundPrimary};
      color: ${props => props.theme.colors.textPrimary};
      border: 2px solid ${props => props.theme.colors.textPrimary};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem;
      width: 3rem;
      transition: .3s;

      &:hover {
        background: ${props => props.theme.colors.textPrimary};
        color: ${props => props.theme.colors.backgroundPrimary};
      }
    }
  }

  .carousel {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        font-weight: 500;
        letter-spacing: 1px;
        margin-top: 0.6rem;
      }
    }

    .center {
      height: 12rem;
      width: 12rem;
      z-index: 10;
      background: ${props => props.theme.colors.backgroundSecondary}ee;
      font-size: 1.4rem;

      svg {
        font-size: 6rem;
      }
    }

    .left, .right {
      height: 9rem;
      width: 9rem;
      background: ${props => props.theme.colors.backgroundSecondary}99;
      z-index: 9;
      margin: -1rem;

      svg {
        font-size: 4rem;
      }
    }

    .far-left, .far-right {
      height: 6rem;
      width: 6rem;
      background: ${props => props.theme.colors.backgroundSecondary}55;
      z-index: 8;
      font-size: 0.8rem;

      svg {
        font-size: 2rem;
      }
    }
  }

  @media(max-width: 885px) {
    height: auto;
    margin-bottom: 5rem;
  }

  @media (max-width: 780px) {
    .descriptive {
      p {
        &:last-child {
          margin-top: 1rem;
        }
      }
    }
    .skill-list {
      .arrow {
        margin: 0;
      }

      .left-arrow {
        margin-right: 2rem;
      }

      .right-arrow {
        margin-left: 2rem;
      }
    }

    .carousel {
      .far-left, .far-right {
        display: none;
      }
    }
  }

  @media (max-width: 560px) {
    .carousel {
      .left, .right {
        display: none;
      }
    }
  }
`;