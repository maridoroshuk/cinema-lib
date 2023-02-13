import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.sizes.width[40]}px;
  right: ${({ theme }) => theme.sizes.width[50]}px;
  z-index: ${({ theme }) => theme.zIndex[5000]};
`;

export const StyledButton = styled.button`
  width: ${({ theme }) => theme.sizes.width[50]}px;
  height: ${({ theme }) => theme.sizes.width[50]}px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGreyTransparent};
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
    width: ${({ theme }) => theme.sizes.width[30]}px;
    height: ${({ theme }) => theme.sizes.height[2]}px;
    background-color: ${({ theme }) => theme.colors.defaultWhite};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
