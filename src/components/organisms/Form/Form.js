import React, { useState, useContext } from 'react';
import { Wrapper } from 'components/organisms/TasksList/TasksList.style';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Container } from 'components/organisms/Form/Form.style';
import { TasksContext } from 'providers/TasksProvider';

const initialFormState = {
  title: '',
};

const Form = () => {
  const [nameValue, setNameValue] = useState(initialFormState);
  const { handleAddTask } = useContext(TasksContext);

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    handleAddTask(nameValue);
    setNameValue(initialFormState);
  };

  return (
    <Container>
      <Wrapper as="form" onSubmit={handleSubmitTask}>
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
};

export default Form;
