import React, { useContext } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { StyledSearchBar } from './SearchBar.style';
import { TasksContext } from 'providers/TasksProvider';

const SearchBar = ({ onChange, value, label, name, id, type = 'text' }) => {
  const { tasks } = useContext(TasksContext);

  return (
    <StyledSearchBar value={tasks.length}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
