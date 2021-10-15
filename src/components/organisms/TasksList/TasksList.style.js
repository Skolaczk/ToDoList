import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 50px;
  margin: 10px 0;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-right: 5px;
    }

    button {
      margin-left: 5px;
    }
  }

  @media (max-width: 460px) {
    padding: 25px;
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 26px;
    }
  }
`;
