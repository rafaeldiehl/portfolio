import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;

  height: 3.75rem;
  width: 101vw;

  background: ${props => props.theme.colors.backgroundSecondary};

  transition: width .4s;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0.25rem 1.5rem;

  border-bottom: 3px solid ${props => props.theme.colors.backgroundTertiary};

  img {
    height: 2.5rem;
    width: 2.5rem;
    margin: 1rem;
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

      height: 4rem;

      letter-spacing: 1px;

      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 3px solid transparent;

      &:hover {
        border-color: #B12F4E;
      }
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

 
  @media (max-width: 500px) {
  }
`;