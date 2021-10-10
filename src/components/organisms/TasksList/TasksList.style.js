import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 50px;
  margin: 10px 0;

  @media (max-width: 460px) {
    padding: 25px;
  }
`;
