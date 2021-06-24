import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  left: 0;

  width: 5rem;
  height: 100vh;

  background: #101015;

  transition: width .4s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0.25rem 0 1.5rem;

  img {
    height: 3rem;
    width: 3rem;
    margin: 1rem;
  }

  ul {
    margin-top: -1rem;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      color: #676769;
      font-size: 1.75rem;
      font-weight: 300;

      width: 3rem;
      height: 3rem;
      border-radius: 25px;

      margin: 0.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: #ffffff;
        background: #B12F4E;
      }
    }

    .checked {
      color: #ffffff;
      background: #0A0A0C;;
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

  @media (min-width: 500px) {
    &:hover {
      width: 13rem;

      a {
        width: 9rem;
        background: #0A0A0C;
        justify-content: space-between;
        padding: 0 1rem;

        transition: .6s;
      }

      .item-desc {
        display: block;
      }
    }
  }
 
  @media (max-width: 500px) {
    width: 100vw;
    height: 5rem;

    bottom: 0;
    padding: 0;

    flex-direction: row;

    img {
      display: none;
    }

    ul {
      flex-direction: row;

      width: 100%;
      height: 5rem;

      margin-top: 0;

      justify-content: space-around;
    }

    label {
      display: none;
    }
  }
`;