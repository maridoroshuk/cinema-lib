import React from 'react';
import { ErrorMessage } from 'formik';

import { Tooltip } from '@/components/Tooltip';

import { IInputProps } from './interface';
import { Icon, Label, StyledField, Wrapper } from './styles';

export const Input = ({
  type,
  name,
  icon,
  label,
  placeholder,
}: IInputProps) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label}
        {icon && <Icon src={icon} alt={name} />}
        <StyledField
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
        />
        <ErrorMessage name={name}>
          {(message) => <Tooltip>{message}</Tooltip>}
        </ErrorMessage>
      </Label>
    </Wrapper>
  );
};
