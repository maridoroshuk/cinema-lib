import React from 'react';
import { ILogoButtonProps } from './interface';
import { Button } from './styles';

export const LogoButton = ({
  children,
  value,
  config: { logo, textColor, background },
  onClick,
}: ILogoButtonProps) => {
  return (
    <Button
      logo={logo}
      textColor={textColor}
      background={background}
      value={value}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
