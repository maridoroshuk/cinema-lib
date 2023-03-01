import React from 'react';

import { IProfileButton } from './interface';
import { ButtonStyled } from './styles';

export const ProfileButton = ({ onClick, children }: IProfileButton) => {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
