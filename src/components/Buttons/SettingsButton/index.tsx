import React from 'react';

import SettingsImage from '@/assets/icons/settings.png';

import { ISettingsButton } from './interface';
import { ButtonStyled, Settings } from './styles';

export const SettingsButton = ({ onClick }: ISettingsButton) => {
  return (
    <ButtonStyled onClick={onClick}>
      <Settings src={SettingsImage} alt="settings" />
    </ButtonStyled>
  );
};
