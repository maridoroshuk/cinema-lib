import React from 'react';

import { IModal } from './interface';
import { Wrapper } from './styles';

export const Modal = ({dataCy, children }: IModal) => {
  return <Wrapper data-cy={dataCy}>{children}</Wrapper>;
};
