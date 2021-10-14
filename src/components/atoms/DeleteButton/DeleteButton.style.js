import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 50%;
  min-width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  margin-left: 5px;

  span {
    position: absolute;
    top: 6px;
    left: 10px;
  }
`;
