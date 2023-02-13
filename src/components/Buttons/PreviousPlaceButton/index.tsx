import React from 'react';

import PreviousPlaceButton from '@/assets/icons/previous_place_button.png';

import { Previous, Wrapper } from './styles';

export interface IArrowButton {
  onClick?: () => void;
}

export const PreviousPlace = ({ onClick }: IArrowButton) => {
  return (
    <Wrapper onClick={onClick}>
      <Previous src={PreviousPlaceButton} />
    </Wrapper>
  );
};
