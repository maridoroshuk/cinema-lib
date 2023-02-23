import React from 'react';

import { IFormHelperTextProps } from './interface';
import { Wrapper } from './styles';

export const FormHelperText = ({ message }: IFormHelperTextProps) => {
  return <Wrapper>{message}</Wrapper>;
};
