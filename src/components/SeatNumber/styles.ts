import styled, { css } from 'styled-components';

import { ISeatNumberProps } from '@/components/SeatNumber/interface';

const gold = css`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.defaultBlack};
`;
const grey = css`
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.defaultBlack};
`;
const last = css`
  width: ${({ theme }) => theme.sizes.width[100]}px;
  height: ${({ theme }) => theme.sizes.height[95]}px;
`;
const previous = css`
  width: ${({ theme }) => theme.sizes.width[115]}px;
  height: ${({ theme }) => theme.sizes.height[110]}px;
`;
const current = css`
  width: ${({ theme }) => theme.sizes.width[130]}px;
  height: ${({ theme }) => theme.sizes.height[130]}px;
`;
export const StyledSeat = styled.div<Partial<ISeatNumberProps>>`
  border-radius: ${({ theme }) => theme.sizes.borderRadius[10]}px;
  border: 1px solid ${({ theme }) => theme.colors.defaultBlack};
  font-weight: ${({ theme }) => theme.sizes.fontWeight[300]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.fontSize[48]}px;
  line-height: ${({ theme }) => theme.sizes.lineHeight[65]}px;
  font-weight: ${({ theme }) => theme.sizes.fontWeight[300]};
  font-family: ${({ theme }) => theme.fontFamily.Nunito};

  ${({ backgroundColor }) => {
    switch (backgroundColor) {
      case 'gold':
        return gold;
      case 'grey':
        return grey;
      default:
        return grey;
    }
  }}
  ${({ seatIndex }) => {
    const isLast = seatIndex === 0 || seatIndex === 4;
    const isPrevious = seatIndex === 1 || seatIndex === 3;
    if (isLast) {
      return last;
    }
    if (isPrevious) {
      return previous;
    }
    return current;
  }}
`;
