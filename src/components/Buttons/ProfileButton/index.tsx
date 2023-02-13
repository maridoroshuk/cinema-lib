import React from 'react';
import { IProfileButton } from './interface';
import { ButtonStyled } from './styles';

export const ProfileButton = ({ onClick }: IProfileButton) => {
  return <ButtonStyled onClick={onClick}>Profile</ButtonStyled>;
};
