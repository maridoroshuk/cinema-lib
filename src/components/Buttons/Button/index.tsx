import React from 'react';

import { ButtonStyled } from '@/components/Buttons/Button/styles';

import { IButtonProps } from './interface';

export const Button = ({
  children,
  size,
  backgroundColor,
  type,
  value,
  onClick,
  dataCy,
}: IButtonProps) => {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      size={size}
      type={type || 'button'}
      value={value}
      onClick={onClick}
      data-cy={dataCy}
    >
      {children}
    </ButtonStyled>
  );
};
