import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.sizes.width[10]}px;
  right: ${({ theme }) => theme.sizes.width[20]}px;
  z-index: ${({ theme }) => theme.zIndex[5000]};

  @media (min-width: ${({ theme }) => theme.screenSizes[860]}px) {
    top: ${({ theme }) => theme.sizes.width[40]}px;
    right: ${({ theme }) => theme.sizes.width[50]}px;

  }
`;

export const StyledButton = styled.button`
  width: ${({ theme }) => theme.sizes.width[30]}px;
  height: ${({ theme }) => theme.sizes.width[30]}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral300Transparent};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: none;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.sizes.width[20]}px;
    height: ${({ theme }) => theme.sizes.height[2]}px;
    background-color: ${({ theme }) => theme.colors.neutral000};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  @media (min-width: ${({ theme }) => theme.screenSizes[860]}px) {
    width: ${({ theme }) => theme.sizes.width[50]}px;
    height: ${({ theme }) => theme.sizes.width[50]}px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: ${({ theme }) => theme.sizes.width[30]}px;
      height: ${({ theme }) => theme.sizes.height[2]}px;
      background-color: ${({ theme }) => theme.colors.neutral000};
    }
  }
`;
