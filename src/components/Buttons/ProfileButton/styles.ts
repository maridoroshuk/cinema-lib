import styled from 'styled-components';

import Profile from '@/assets/icons/profile.png';

export const ButtonStyled = styled.div`
  max-width: ${({ theme }) => theme.sizes.width[280]}px;
  width: 100%;
  padding: ${({ theme }) => `${theme.spaces[15]}px ${theme.spaces[30]}px`};
  color: ${({ theme }) => theme.colors.defaultWhite};
  background-color: transparent;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  line-height: ${({ theme }) => theme.sizes.lineHeight[36]}px;
  font-weight: ${({ theme }) => theme.sizes.fontWeight[300]};
  font-size: ${({ theme }) => theme.sizes.fontSize[30]}px;
  border: none;
  border-radius: ${({ theme }) => theme.spaces[10]}px;
  cursor: pointer;
  text-align: center;
  vertical-align: bottom;

  &:after {
    width: ${({ theme }) => theme.sizes.width[40]}px;
    height: ${({ theme }) => theme.sizes.width[40]}px;
    content: '';
    display: inline-block;
    vertical-align: bottom;
    background-image: url(${Profile});
    background-size: cover;
    margin-left: ${({ theme }) => theme.spaces[20]}px;
  }
`;
