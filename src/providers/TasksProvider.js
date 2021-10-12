import React, { useState } from 'react';
import { data as taskData } from 'data/data';

export const TasksContext = React.createContext({
  tasks: [],
  handleAddTask: () => {},
  deleteTask: () => {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(taskData);

  const deleteTask = (title) => {
    const filteredTasks = tasks.filter((task) => task.title !== title);
    setTasks(filteredTasks);
  };

  const handleAddTask = (value) => {
    const newTask = {
      title: value.name,
    };

    setTasks([...tasks, newTask]);
  };
  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleAddTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
