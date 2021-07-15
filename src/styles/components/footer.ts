import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-container {
    width: 90vw;
    border-top: 1px solid ${props => props.theme.colors.backgroundTertiary};
    padding: 1rem 0;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .flex-container {
    color: ${props => props.theme.colors.textSecondary};

    a {
      text-decoration: underline;
      color: ${props => props.theme.colors.textPrimary};
      margin: 0.2rem;
    }
  }

  @media (max-width: 850px) {
    .footer-container {
      flex-direction: column;
    }
  }
  
  @media (max-width: 420px) {
    .footer-container {
      align-items: center;
    }
    
    .flex-container {
      text-align: center;
      width: 90%;
      margin: 0.5rem 0;
    }
  }
`;