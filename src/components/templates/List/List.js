import React from 'react';
import TasksList from 'components/organisms/TasksList/TasksList';
import { StyledList } from 'components/templates/List/List.style';

const List = () => (
  <StyledList>
    <TasksList />
  </StyledList>
);

export default List;
