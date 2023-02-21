import React, { useId } from 'react';
import { ErrorMessage } from 'formik';

import { Tooltip } from '@/components/Tooltip';

import { IInputProps } from './interface';
import { AdditionalText, Icon, Label, StyledField, Wrapper } from './styles';

export const Input = ({
  type,
  name,
  icon,
  label,
  placeholder,
  helperText,
  onInputBlur,
}: IInputProps) => {
  const inputId = useId();

  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label}
        {icon && <Icon src={icon} alt={name} />}
        <StyledField
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          onBlur={onInputBlur}
        />
        <ErrorMessage name={name}>
          {(message) => <Tooltip>{message}</Tooltip>}
        </ErrorMessage>
        {helperText && <AdditionalText>{helperText}</AdditionalText>}
      </Label>
    </Wrapper>
  );
};
