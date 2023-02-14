import React from 'react';

import { IModal } from './interface';
import { Wrapper } from './styles';

export const Modal = ({ children }: IModal) => {
  return <Wrapper>{children}</Wrapper>;
};
