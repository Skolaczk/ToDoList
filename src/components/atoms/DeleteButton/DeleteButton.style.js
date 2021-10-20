import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;
