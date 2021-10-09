import React from 'react';
import Button from 'components/atoms/Button/Button';
import { StyledListItem } from 'components/molecules/TaskListItem/TaskListItem.style';

const TaskListItem = ({ deleteTask, userData: { id, title } }) => (
  <StyledListItem key={id}>
    <h2>{title}</h2>
    <Button onClick={() => deleteTask(title)} />
  </StyledListItem>
);

export default TaskListItem;
