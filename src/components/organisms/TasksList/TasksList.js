import React, { useContext } from 'react';
import TaskListItem from 'components/molecules/TaskListItem/TaskListItem';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';
import { Container } from 'components/organisms/Form/Form.style';
import { TasksContext } from 'providers/TasksProvider';
import DeleteAllButton from 'components/atoms/DeleteAllButton/DeleteAllButton';

const TasksList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <Container>
      <Wrapper>
        <div className="box">
          <h1>To Do List</h1>
          <DeleteAllButton />
        </div>
        {tasks.map((taskData) => (
          <TaskListItem key={taskData.id} taskData={taskData} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default TasksList;
