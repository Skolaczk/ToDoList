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
  const [titleValue, setTitleValue] = useState(initialFormState);
  const { handleAddTask } = useContext(TasksContext);

  const handleNameChange = (e) => {
    setTitleValue({
      ...titleValue,
      title: e.target.value,
    });
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    handleAddTask(titleValue);
    setTitleValue(initialFormState);
  };

  return (
    <Container>
      <Wrapper as="form" onSubmit={handleSubmitTask}>
        <h2>Add a task</h2>
        <FormField
          label="Task name"
          id="name"
          name="name"
          value={titleValue.title}
          onChange={handleNameChange}
        />
        <Button type="submit">Add</Button>
      </Wrapper>
    </Container>
  );
};

export default Form;
