import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% {
    transform: rotate(-10deg);
  }

  25% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(10deg);
  }

  75% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-10deg);
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

  .projects-container {
    margin-right: 5rem;
    max-width: 30rem;
    display: grid;
    grid-template-areas:
                "a a b b"
                "a a c c"
                "d d f f"
                "e e f f";

    > a {
      width: 100%;
      height: 7rem;

      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      transition: .3s;

      &:hover {
        background: ${props => props.theme.colors.backgroundPrimary};

        svg {
          opacity: 1;
          animation: ${shake} .2s infinite;
        }
      }

      img {
        width: 60%;
      }

      svg {
        position: absolute;
        bottom: 0.5rem;
        left: 0.5rem;
        font-size: 1.3rem;
        opacity: 0.8;
      }
    }

    .project-1, .project-6 {
      height: 14rem;
      background: ${props => props.theme.colors.backgroundSecondary}ee;

      img {
        width: 80%;
      }

      svg {
        bottom: 0.75rem;
        left: 0.75rem;
        font-size: 2rem;
      }
    }

    .project-2, .project-4 {
      background: ${props => props.theme.colors.backgroundSecondary}99;
    }

    .project-3, .project-5 {
      background: ${props => props.theme.colors.backgroundSecondary}66;
    }

    .project-1 {
      grid-area: a;
    }

    .project-2 {
      grid-area: b;
    }

    .project-3 {
      grid-area: c;
    }

    .project-4 {
      grid-area: d;
    }

    .project-5 {
      grid-area: e;
    }

    .project-6 {
      grid-area: f;
    }
  }

  @media (max-width: 950px) {
    .projects-container {
      grid-template-areas:
                    "a b"
                    "c d"
                    "e f";
      margin-right: 2rem;

      > a {
        height: 9rem;

        img {
          width: 70%;
        }
      }

      .project-1, .project-6 {
        height: 9rem;
        background: ${props => props.theme.colors.backgroundSecondary}ee;

        img {
          width: 70%;
        }

        svg {
          bottom: 0.5rem;
          left: 0.5rem;
          font-size: 1.3rem;
        }
      }

      .project-1, .project-4, .project-5 {
        background: ${props => props.theme.colors.backgroundSecondary}ee;
      }

      .project-2, .project-3, .project-6 {
        background: ${props => props.theme.colors.backgroundSecondary}99;
      }
    }
  }

  @media (max-width: 815px) {
    height: auto;
    margin-bottom: 4rem;

    .flex-container {
      flex-direction: column;

      > div {
        width: 95%;
      }
    }

    .projects-container {
      margin-right: 0;
      margin-top: 3rem;
    }
  }
`;