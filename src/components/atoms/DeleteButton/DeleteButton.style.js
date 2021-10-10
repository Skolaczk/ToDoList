import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;

  span {
    position: absolute;
    top: 6px;
    left: 10px;
  }
`;
