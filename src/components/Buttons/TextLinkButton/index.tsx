import React from 'react';
import { ITextLinkButtonProps } from './interface';
import { StyledLink } from './styles';

export const TextLinkButton = ({
  children,
  value,
  onClick,
}: ITextLinkButtonProps) => {
  return (
    <StyledLink value={value} onClick={onClick}>
      {children}
    </StyledLink>
  );
};
