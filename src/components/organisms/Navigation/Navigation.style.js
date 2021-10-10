import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.darkGray};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  * {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 10px;
  }
`;
