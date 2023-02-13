import React from 'react';
import { ICloseButtonProps } from './interface';
import { ButtonWrapper, StyledButton } from './styles';

export const CloseButton = ({ onClose }: ICloseButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={onClose} />
    </ButtonWrapper>
  );
};
