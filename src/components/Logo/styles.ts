import styled from 'styled-components';

export const LogoStyled = styled.img<{
  width: number;
}>`
  width: 100%;
  max-width: ${({ width }) => width}px;
  min-width: ${({ theme }) => theme.sizes.width[100]}px;
`;
