import React from 'react';

import ArrowImage from '@/assets/icons/arrow.png';

import { IArrowButton } from './interface';
import { Arrow, Wrapper } from './styles';

export const ArrowButton = ({ onClick }: IArrowButton) => {
  return (
    <Wrapper onClick={onClick}>
      <Arrow src={ArrowImage} alt="arrow (hide)" />
    </Wrapper>
  );
};
