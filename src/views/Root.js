import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import TasksList from 'components/organisms/TasksList/TasksList';
import Form from 'components/organisms/Form/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from 'components/organisms/Navigation/Navigation';
import TasksProvider from 'providers/TasksProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <TasksProvider>
          <Switch>
            <Route path="/add-task">
              <Form />
            </Route>
            <Route path="/">
              <TasksList />
            </Route>
          </Switch>
        </TasksProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
