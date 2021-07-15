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

export const Container = styled.section`

  padding-top: 3.75rem;

  display: flex;
  justify-content: center;

  .flex-container {
    height: 100%;
    width: 90vw;
    max-width: 1400px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > section {
      width: 50%;
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
    }
  }

  .trajectory {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > h3 {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }
  }

  .node {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    padding-left: 2rem;
    margin: 0.5rem 0;

    .circle {
      width: 12px !important;
      height: 12px !important;
      border-radius: 50%;
      background: var(--red);
      position: relative;
      margin: 2rem;

      &.first-circle {
        &::after {
          content: '';
          height: 11rem;
          width: 3px;
          background: var(--red);
          position: absolute;
          left: 50%;
          top: 5px;
          transform: translateX(-50%);
        }
      }

      &.active-circle {
        background: ${props => props.theme.colors.textPrimary};
  
        &::after {
          content: '';
          width: 20px;
          height: 20px;
          border: 2px solid var(--red);
          position: absolute;
          border-radius: 50%;
          top: -6px;
          left: -6px;
        }
      }
    }

    .course {
      .time {
        font-size: 0.9rem;
        color: ${props => props.theme.colors.textSecondary};
      }

      h3 {
        font-size: 1.2rem;
        margin: 0.2rem 0;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media(max-width: 885px) {
    height: auto;

    .flex-container {
      flex-direction: column;

      > section {
        width: 95%;
      }
    }

    .trajectory {
      > h3 {
        margin-top: 3rem;
      }
    }

    .node {
      padding-left: 0;

      .course {
        h3 {
          width: 100%;
        }
      }
    }
  }
`;