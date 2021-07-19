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

const changeBorderColor = keyframes`
  0% {
    border-color: #EB8A3E;
  }

  25% {
    border-color: #ED3F3E;
  }

  50% {
    border-color: #aC2241;
  }

  75% {
    border-color: #ED3F3E;
  }

  100% {
    border-color: #EB8A3E;
  }
`;

const changeColor = keyframes`
  0% {
    color: #EB8A3E;
  }

  25% {
    color: #ED3F3E;
  }

  50% {
    color: #aC2241;
  }

  75% {
    color: #ED3F3E;
  }

  100% {
    color: #EB8A3E;
  }
`;

export const Container = styled.section`
  margin: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div {
    width: 47.5%;
  }
  
  .descriptive {
    padding-right: 2rem;

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

        a {
          display: inline;
          color: #ED3F3E;
          text-decoration: underline;
        }
      }
    }
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 100%;
    max-width: 455px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .field-container {
      width: 100%;
      position: relative;

      label {
        position: absolute;
        top: 1.3rem;
        left: 0.5rem;
        color: ${props => props.theme.colors.textSecondary};
        transition: .3s;
        background: ${props => props.theme.colors.backgroundPrimary};
        padding: 0 0.5rem;
      }

      input, textarea {
        width: 100%;
        border-radius: 6px;
        border: none;
        background: none;
        border: 2px solid ${props => props.theme.colors.backgroundSecondary};
        margin: 0.3rem 0;
        padding: 0.8rem;
        color: ${props => props.theme.colors.textPrimary};
        transition: .3s;

        &:focus, &:valid {
          outline: none;
          margin-top: 0.75rem;
          border-color: ${props => props.theme.colors.textSecondary};

          &+ label {
            font-size: 0.9rem;
            top: 0.25rem;
          }
        }

        &:focus {
          animation: ${changeBorderColor} infinite 2s;

          &+ label {
            animation: ${changeColor} infinite 2s;
          }
        }
      }

      textarea {
        max-width: 100%;
        min-width: 100%;
        height: 180px;
        max-height: 300px;
        min-height: 40px;
      }
    }

    .buttons-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;

      button {
        border: none;
        padding: 1rem;
        width: 50%;
        font-size: 1.1rem;
        border-radius: 6px;
        background: ${props => props.theme.colors.backgroundSecondary};
        color: ${props => props.theme.colors.textSecondary};
        margin: 0.3rem 0;
        transition: .4s;

        .button-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
        }

        &[type="submit"] {
          background: linear-gradient(
            60deg,
            #aC2241,
            #ED3F3E,
            #EB8A3E
          );
          color: white;
          font-weight: 500;
        }

        &:first-child {
          margin-right: 0.25rem;
        }

        &:last-child {
          margin-left: 0.25rem;
        }

        &:hover {
          border-radius: 0;

          svg {
            font-size: 1.3rem;
            animation: ${shake} infinite linear 0.3s;
          }
        }
      }
    }
  }

  .send-email-alert {
    width: 18rem;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%);
    background: ${props => props.theme.colors.backgroundPrimary};
    border: 2px solid ${props => props.theme.colors.backgroundSecondary};
    border-radius: 6px;
    padding: 1rem;

    button {
      border: none;
      background: none;
      font-size: 0.9rem;
      display: flex; 
      justify-content: center;
      align-items: center;
      margin-left: 0.5rem;
      color: ${props => props.theme.colors.textPrimary}cc;
    }
  }

  @media (max-width: 1050px) {
    .contact-badges {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 885px) {
    flex-direction: column;
    margin: 2rem;

    > div {
      width: 100%;
    }

    .contact-badges {
      .badge {
        padding: 0.75rem 0;
        font-size: 1rem;
        margin: 0.5rem;
      }
    }

    .descriptive {
      margin: 0;
      padding: 0;
      text-align: center;
    }

    form {
      margin-top: 2rem;
    }
  }

  @media (max-width: 435px) {
    form {
      .buttons-container {
        button {
          .button-content {
            justify-content: center;
            padding: 0;
          }

          svg {
            display: none;
          }
        }
      }
    }
  }
`;