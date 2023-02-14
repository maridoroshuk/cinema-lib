import React from 'react';

import { background } from './config';
import { IFormHelperTextProps } from './interface';
import { Wrapper } from './styles';

export const FormHelperText = ({ message, type }: IFormHelperTextProps) => {
  return <Wrapper background={background[type]}>{message}</Wrapper>;
};
