import React, { useContext } from 'react';
import TaskListItem from 'components/molecules/TaskListItem/TaskListItem';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';
import { Container } from 'components/organisms/Form/Form.style';
import { TasksContext } from 'providers/TasksProvider';

const TasksList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <Container>
      <Wrapper>
        <h1>To Do List</h1>
        {tasks.map((taskData) => (
          <TaskListItem taskData={taskData} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default TasksList;
