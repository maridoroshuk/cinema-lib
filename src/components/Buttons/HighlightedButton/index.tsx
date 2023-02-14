import React from 'react';
import { IUnderlineButton } from './interface';
import { ButtonStyled } from './styles';

export const HighlightedButton = ({
  children,
  handleButtonClick,
  value,
}: IUnderlineButton) => {
  return (
    <ButtonStyled onClick={handleButtonClick} value={value || ''}>
      {children}
    </ButtonStyled>
  );
};
