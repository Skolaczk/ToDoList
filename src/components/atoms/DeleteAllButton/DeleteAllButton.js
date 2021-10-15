import React, { useContext } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { TasksContext } from 'providers/TasksProvider';

const DeleteAllButton = (props) => {
  const { tasks, deleteAllTasks } = useContext(TasksContext);

  return (
    <Button value={tasks.length} onClick={deleteAllTasks} {...props}>
      Delete tasks
    </Button>
  );
};

export default DeleteAllButton;
