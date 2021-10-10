import React, { useState } from 'react';
import { data } from 'data/data';
import TaskListItem from 'components/molecules/TaskListItem/TaskListItem';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button1/Button';

const initialFormState = {
  title: '',
};

const TasksList = () => {
  const [tasks, setTasks] = useState(data);
  const [nameValue, setNameValue] = useState(initialFormState);

  const deleteTask = (title) => {
    const filteredTasks = tasks.filter((task) => task.title !== title);
    setTasks(filteredTasks);
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      title: nameValue,
    };

    setTasks([...tasks, newTask]);

    setNameValue(initialFormState);
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddTask}>
        <h1>Add a task</h1>
        <FormField
          label="task name"
          id="name"
          name="name"
          value={nameValue.title}
          onChange={handleNameChange}
        />
        <Button type="submit">Add</Button>
      </Wrapper>
      <Wrapper>
        <h1>To Do List</h1>
        {tasks.map((userData) => (
          <TaskListItem userData={userData} deleteTask={deleteTask} />
        ))}
      </Wrapper>
    </>
  );
};

export default TasksList;
