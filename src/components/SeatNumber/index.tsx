import React from 'react';

import { ISeatProps } from '@/components/SeatNumber/interface';
import { StyledSeat } from '@/components/SeatNumber/styles';

export const SeatNumber = ({
  children,
  backgroundColor,
  index,
}: Partial<ISeatProps>) => {
  return (
    <StyledSeat backgroundColor={backgroundColor} seatIndex={index}>
      {children}
    </StyledSeat>
  );
};
