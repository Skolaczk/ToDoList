import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigation } from './Navigation.style';

const Navigation = () => (
  <StyledNavigation>
    <Link to="/">Home</Link>
    <Link to="/add-task">Add task</Link>
  </StyledNavigation>
);

export default Navigation;
