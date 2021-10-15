import React, { useState, useContext } from 'react';
import TaskListItem from 'components/molecules/TaskListItem/TaskListItem';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';
import { Container } from 'components/organisms/Form/Form.style';
import { TasksContext } from 'providers/TasksProvider';
import DeleteAllButton from 'components/atoms/DeleteAllButton/DeleteAllButton';
import SearchBar from 'components/molecules/SearchBar/SearchBar';

const TasksList = () => {
  const { tasks } = useContext(TasksContext);
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const filteredTasks = tasks.filter(({ title }) =>
    title.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <div className="box">
          <h1>To Do List</h1>
          <DeleteAllButton />
        </div>
        <SearchBar
          label="Search a title of task"
          id="name"
          name="name"
          onChange={handleChange}
        />
        {searchShow
          ? filteredTasks.map((taskData) => (
              <TaskListItem key={taskData.id} taskData={taskData} />
            ))
          : tasks.map((taskData) => (
              <TaskListItem key={taskData.id} taskData={taskData} />
            ))}
      </Wrapper>
    </Container>
  );
};

export default TasksList;
