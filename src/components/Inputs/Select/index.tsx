import React from 'react';

import { ISelectProps } from './interface';
import { Label, Option, StyledSelect, Wrapper } from './styles';

export const Select = ({
  config: { name, label, id, options },
}: ISelectProps) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
        <StyledSelect component="select" name={name} data-testid="select">
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
