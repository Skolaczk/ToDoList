import React from 'react';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Container } from 'components/organisms/Form/Form.style';

const TasksList = ({ handleAddTask, handleNameChange, nameValue }) => (
  <Container>
    <Wrapper as="form" onSubmit={handleAddTask}>
      <h1>Add a task</h1>
      <FormField
        label="Task name"
        id="name"
        name="name"
        value={nameValue.title}
        onChange={handleNameChange}
      />
      <Button type="submit">Add</Button>
    </Wrapper>
  </Container>
);

export default TasksList;
