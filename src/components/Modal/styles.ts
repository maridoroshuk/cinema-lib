import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.width[850]}px;
  padding: ${({ theme }) => theme.spaces[20]}px
    ${({ theme }) => theme.spaces[10]}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.neutral900};
  z-index: ${({ theme }) => theme.zIndex[3000]};

  @media (min-width: ${({ theme }) => theme.screenSizes[600]}px) {
    padding: ${({ theme }) => theme.spaces[40]}px
      ${({ theme }) => theme.spaces[70]}px;
  }
`;
