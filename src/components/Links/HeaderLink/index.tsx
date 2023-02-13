import React from 'react';
import { IHeaderLinkProps } from './interface';
import { ListItemStyled } from './styles';

export const HeaderLink = ({ children }: IHeaderLinkProps) => {
  return <ListItemStyled>{children}</ListItemStyled>;
};
