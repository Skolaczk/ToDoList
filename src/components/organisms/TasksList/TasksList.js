import React from 'react';
import TaskListItem from 'components/molecules/TaskListItem/TaskListItem';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';
import { Container } from 'components/organisms/Form/Form.style';

const TasksList = ({ tasks, deleteTask }) => (
  <Container>
    <Wrapper>
      <h1>To Do List</h1>
      {tasks.map((taskData) => (
        <TaskListItem taskData={taskData} deleteTask={deleteTask} />
      ))}
    </Wrapper>
  </Container>
);

export default TasksList;
