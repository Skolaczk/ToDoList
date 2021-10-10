import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: 7px 20px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
