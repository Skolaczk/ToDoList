import React, { useContext } from 'react';
import TaskListItem from 'components/molecules/TaskListItem/TaskListItem';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';
import { Container } from 'components/organisms/Form/Form.style';
import { TasksContext } from 'providers/TasksProvider';
import { Button } from 'components/atoms/Button/Button';

const TasksList = () => {
  const { tasks, deleteAllTasks } = useContext(TasksContext);

  return (
    <Container>
      <Wrapper>
        <div className="box">
          <h1>To Do List</h1>
          <Button onClick={deleteAllTasks}>Delete all tasks</Button>
        </div>
        {tasks.map((taskData) => (
          <TaskListItem key={taskData.title} taskData={taskData} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default TasksList;
