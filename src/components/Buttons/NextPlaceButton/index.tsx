import React from 'react';

import NextPlaceButton from '@/assets/icons/next_place_button.png';

import { Next, Wrapper } from './styles';

export interface IArrowButton {
  onClick?: () => void;
}

export const NextPlace = ({ onClick }: IArrowButton) => {
  return (
    <Wrapper onClick={onClick}>
      <Next src={NextPlaceButton} />
    </Wrapper>
  );
};
