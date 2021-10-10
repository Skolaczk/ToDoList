import React, { useState } from 'react';
import { data as taskData } from 'data/data';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import List from 'components/templates/List/List';
import Form from 'components/templates/Form/Form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const initialFormState = {
  title: '',
};

const Root = () => {
  const [tasks, setTasks] = useState(taskData);
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-task">Add task</Link>
        </nav>
        <Switch>
          <Route path="/add-task">
            <Form
              nameValue={nameValue}
              handleAddTask={handleAddTask}
              handleNameChange={handleNameChange}
            />
          </Route>
          <Route path="/">
            <List deleteTask={deleteTask} tasks={tasks} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
