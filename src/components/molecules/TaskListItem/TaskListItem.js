import React, { useContext } from 'react';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledListItem } from 'components/molecules/TaskListItem/TaskListItem.style';
import { TasksContext } from 'providers/TasksProvider';

const TaskListItem = ({ taskData: { title } }) => {
  const { deleteTask } = useContext(TasksContext);

  return (
    <StyledListItem>
      <h2>{title}</h2>
      <DeleteButton onClick={() => deleteTask(title)} />
    </StyledListItem>
  );
};

export default TaskListItem;
