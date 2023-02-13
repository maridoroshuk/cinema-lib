import React from 'react';

import LogoImage from '@/assets/Logo.png';
import { getLogoSize } from '@/helpers/getLogoSize';

import { LogoStyled } from './styles';
import { ILogo } from './interface';

export const Logo = ({ size }: ILogo) => {
  const width = getLogoSize(size);
  return (
    <LogoStyled src={LogoImage} width={width} alt="company logo (Modsen)" />
  );
};
