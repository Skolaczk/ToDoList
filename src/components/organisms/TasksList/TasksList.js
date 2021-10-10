import React from 'react';
import TaskListItem from 'components/molecules/TaskListItem/TaskListItem';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';

const TasksList = ({ tasks, deleteTask }) => (
  <Wrapper>
    <h1>To Do List</h1>
    {tasks.map((taskData) => (
      <TaskListItem taskData={taskData} deleteTask={deleteTask} />
    ))}
  </Wrapper>
);

export default TasksList;
