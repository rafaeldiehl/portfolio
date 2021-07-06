import styled from 'styled-components';

export const Container = styled.section`
  background: ${props => props.theme.colors.backgroundSecondary};
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.5rem;
  
  a {
    color: var(--yellow);
    margin-left: 0.2rem;
  }
`;