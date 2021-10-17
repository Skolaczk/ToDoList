import React, { useState, useEffect } from 'react';
import { data as taskData } from 'data/data';

export const TasksContext = React.createContext({
  tasks: [],
  handleAddTask: () => {},
  deleteTask: () => {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(taskData);

  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem('tasks'));

    if (getTasks) {
      setTasks(getTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const deleteAllTasks = () => setTasks([]);

  const handleAddTask = (value) => {
    const newTask = {
      id: Math.floor(Math.random() * (10000 - 10)) + 10,
      title: value.title,
    };

    setTasks([...tasks, newTask]);
  };
  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleAddTask,
        deleteTask,
        deleteAllTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
