import React from 'react';
import { ISelectProps } from './interface';
import { Wrapper, StyledSelect, Option, Label } from './styles';

export const Select = ({
  config: { name, label, id, options },
}: ISelectProps) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
        <StyledSelect component="select" name={name}>
          {options.map(({ id, value }) => (
            <Option key={id} value={value}>
              {value}
            </Option>
          ))}
        </StyledSelect>
      </Label>
    </Wrapper>
  );
};
