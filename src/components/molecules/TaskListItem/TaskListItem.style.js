import styled from 'styled-components';

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  padding: 20px 0;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  h2 {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
