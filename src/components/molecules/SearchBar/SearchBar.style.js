import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  margin-bottom: 15px;
  display: ${({ value }) => {
    if (value === 0) return 'none';
    return 'block';
  }};
`;
