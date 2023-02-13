import React from 'react';

import ArrowImage from '@/assets/icons/arrow.png';

import { Arrow, Wrapper } from './styles';
import { IArrowButton } from './interface';

export const ArrowButton = ({ onClick }: IArrowButton) => {
  return (
    <Wrapper onClick={onClick}>
      <Arrow src={ArrowImage} alt="arrow (hide)" />
    </Wrapper>
  );
};
