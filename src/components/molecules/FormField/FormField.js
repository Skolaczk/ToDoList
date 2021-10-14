import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const FormField = ({ onChange, value, label, name, id, type = 'text' }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input
      name={name}
      id={type}
      type={type}
      value={value}
      onChange={onChange}
      required
      autoComplete="off"
    />
  </div>
);

export default FormField;
