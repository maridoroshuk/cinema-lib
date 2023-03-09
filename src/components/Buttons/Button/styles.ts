import styled, { css } from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}

const gold = css`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.neutral000};
`;

const white = css`
  background-color: ${({ theme }) => theme.colors.neutral000};
  color: ${({ theme }) => theme.colors.neutral1000};
`;

const small = css`
  border-radius: ${({ theme }) => theme.sizes.borderRadius[10]}px;
`;

const medium = css`
  height: ${({ theme }) => theme.sizes.height[50]}px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius[10]}px;
`;

const large = css`
  font-weight: ${({ theme }) => theme.sizes.fontWeight[700]};
  height: ${({ theme }) => theme.sizes.height[80]}px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius[15]}px;
`;

export const ButtonStyled = styled.button<ButtonProps>`
  width: 100%;
  font-size: clamp(
    ${({ theme }) =>
      `${theme.sizes.fontSize[16]}px, 2.5vw, ${theme.sizes.fontSize[20]}px`}
  );
  border: 0;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  text-align: center;
  padding: ${({ theme }) => theme.spaces[5]}px
    ${({ theme }) => theme.spaces[10]}px;

  ${({ backgroundColor }) => {
    switch (backgroundColor) {
      case 'gold':
        return gold;
      case 'white':
        return white;
      default:
        return gold;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return small;
      case 'medium':
        return medium;
      case 'large':
        return large;
      default:
        return medium;
    }
  }}


  @media (min-width: ${({ theme }) => theme.screenSizes[600]}px) {
    padding: ${({ theme }) => theme.spaces[10]}px
      ${({ theme }) => theme.spaces[20]}px;
  }
`;
