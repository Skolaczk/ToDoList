import React from 'react';
import { StyledButton } from 'components/atoms/DeleteButton/DeleteButton.style';

const DeleteButton = (props) => (
  <StyledButton {...props}>
    <span>✖</span>
  </StyledButton>
);

export default DeleteButton;
