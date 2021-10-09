import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
`;
