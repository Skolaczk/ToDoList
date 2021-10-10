import React from 'react';
import DeleteButton from 'components/atoms/Button/DeleteButton';
import { StyledListItem } from 'components/molecules/TaskListItem/TaskListItem.style';

const TaskListItem = ({ deleteTask, taskData: { title } }) => (
  <StyledListItem>
    <h2>{title}</h2>
    <DeleteButton onClick={() => deleteTask(title)} />
  </StyledListItem>
);

export default TaskListItem;
