import React from 'react';

import LogoImage from '@/assets/Logo.png';
import { getLogoSize } from '@/helpers/getLogoSize';

import { ILogo } from './interface';
import { LogoStyled } from './styles';

export const Logo = ({ size }: ILogo) => {
  const width = getLogoSize(size);
  return (
    <LogoStyled src={LogoImage} width={width} alt="company logo (Modsen)" />
  );
};
