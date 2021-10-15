import styled from 'styled-components';

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
  display: block;
  margin: 10px 0 5px 0;
`;
