import React from 'react';
import TasksList from 'components/organisms/TasksList/TasksList';
import { Container } from 'components/templates/List/List.style';

const List = ({ tasks, deleteTask }) => (
  <Container>
    <TasksList deleteTask={deleteTask} tasks={tasks} />
  </Container>
);

export default List;
