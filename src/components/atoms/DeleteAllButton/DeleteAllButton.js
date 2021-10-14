import React, { useContext } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { TasksContext } from 'providers/TasksProvider';

const DeleteAllButton = () => {
  const { tasks, deleteAllTasks } = useContext(TasksContext);

  return (
    <Button value={tasks.length} onClick={deleteAllTasks}>
      Delete all tasks
    </Button>
  );
};

export default DeleteAllButton;
