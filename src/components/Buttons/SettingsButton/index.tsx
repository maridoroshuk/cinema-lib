import React from 'react';

import SettingsImage from '@/assets/icons/settings.png';

import { ISettingsButton } from './interface';
import { ButtonStyled, Settings } from './styles';

export const SettingsButton = ({ onClick, dataCy }: ISettingsButton) => {
  return (
    <ButtonStyled onClick={onClick} data-cy={dataCy}>
      <Settings src={SettingsImage} alt="settings" />
    </ButtonStyled>
  );
};
