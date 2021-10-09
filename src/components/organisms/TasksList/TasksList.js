import React, { useState } from 'react';
import { data } from 'data/data';
import TaskListItem from 'components/molecules/TaskListItem/TaskListItem';
import { Wrapper } from 'components/organisms/TaskList/TasksList.style';

const TasksList = () => {
  const [tasks, setTasks] = useState(data);

  const deleteTask = (title) => {
    const filteredTasks = tasks.filter((task) => task.title !== title);
    setTasks(filteredTasks);
  };

  return (
    <Wrapper>
      <h1>To Do List</h1>
      {tasks.map((userData) => (
        <TaskListItem userData={userData} deleteTask={deleteTask} />
      ))}
    </Wrapper>
  );
};

export default TasksList;
