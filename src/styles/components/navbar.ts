import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;

  height: 3.75rem;
  width: calc(100vw - 0.75rem);

  transition: width .4s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 100;

  padding: 0.25rem 2rem;

  background: ${props => props.theme.colors.backgroundPrimary};

  img {
    height: 2.5rem;
    width: 2.5rem;
    margin: 1rem;
    transition: 1.5s;
    cursor: pointer;

    &:hover {
      transform: rotate(360deg);
    }
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    label {
      margin-left: 3rem;
      position: relative;
    
      &::before {
        content: '';
        position: absolute;
        height: 25px;
        width: 2px;
        left: -62.5%;
        top: 50%;
        transform: translate(62.5%, -50%);
        background: ${props => props.theme.colors.backgroundTertiary};
      }
    }
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      color: ${props => props.theme.colors.textSecondary};
      font-size: 1.15rem;
      font-weight: 400;

      margin: 1rem;


      letter-spacing: 1px;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: .2s;
    }

    .checked {
      background: ${props => props.theme.colors.backgroundPrimary};
    }

    .item-desc {
      display: none;
      font-size: 1.25rem;
      font-family: Roboto;
      font-weight: 400;
      text-align: left;
      margin-left: 1rem;
      width: 90%;
    }
  }

  .dropdown-container {
    position: relative;

    > a svg {
      margin-left: 0.1rem;
    }

    .dropdown {
      background: ${props => props.theme.colors.backgroundPrimary}dd;
      position: absolute;
      left: 0px;
      width: 100%;

      display: flex;
      flex-direction: column;

      border-radius: 0 0 5px 5px;

      visibility: hidden;

      li {
        a {
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 1rem;
          margin: 0.5rem;

          svg {
            font-size: 1.2rem;
          }

          &:hover {
            color: var(--red);
          }

          svg {
            margin-right: 0.5rem;
          }
        }
      }
    }

    &:hover {
      .dropdown {
        visibility: visible;
      }
    }
  }

  .hamburger {
    font-size: 2rem;
    margin: 1rem;
    display: none;
    cursor: pointer;
  }
 
  @media (max-width: 600px) {
    padding: 0 1rem;
    left: 0;
    width: 100vw;

    ul {
      display: none;
    }

    .flex-container {
      flex-direction: row-reverse;

      label {
        display: none;
      }
    }

    .flex-container.active {
      ul {
        background: ${props => props.theme.colors.backgroundPrimary};
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        z-index: 50;
        width: calc(100vw - 0.9rem);
        margin-top: 3.75rem;
        padding-top: 2rem;

        li {
          a {
            font-size: 1.3rem;
            margin-left: 2rem;
          }
        }
      }

      .dropdown-container {
        > a svg {
          display: none;
        }

        .dropdown {
          background: ${props => props.theme.colors.backgroundPrimary};
          width: 100%;

          display: flex;
          flex-direction: column;

          margin-top: 2.5rem;
          padding: 0;
          padding-bottom: 1rem;

          visibility: visible;

          border-radius: 0;
          border-bottom: 1px solid ${props => props.theme.colors.backgroundTertiary};

          li {
            a {
              font-size: 1.15rem;
              margin: 0.5rem;
              margin-left: 1rem;

              svg {
                font-size: 1.3rem;
              }

              &:hover {
                color: var(--red);
              }

              svg {
                margin-right: 0.5rem;
              }
            }
          }
        }
      }

      label {
        display: block;
        position: absolute;
        top: 4.5rem;
        z-index: 100;
        left: 40%;
        transform: translateX(-40%);

        &::before {
          display: none;
        }
      }
    }

    .hamburger {
      display: block;
    }
  }
`;