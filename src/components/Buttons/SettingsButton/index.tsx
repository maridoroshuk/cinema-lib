import React from 'react';

import SettingsImage from '@/assets/icons/settings.png';

import { ButtonStyled, Settings } from './styles';
import { ISettingsButton } from './interface';

export const SettingsButton = ({ onClick }: ISettingsButton) => {
  return (
    <ButtonStyled onClick={onClick}>
      <Settings src={SettingsImage} alt="settings" />
    </ButtonStyled>
  );
};
