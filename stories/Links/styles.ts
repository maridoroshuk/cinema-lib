import styled from 'styled-components';

export const Navlink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral000};
  font-size: ${({ theme }) => theme.sizes.fontSize[24]}px;
  line-height: ${({ theme }) => theme.sizes.lineHeight[36]}px;
  font-weight: ${({ theme }) => theme.sizes.fontWeight[300]};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  &.active {
    color: ${({ theme }) => theme.colors.gold};
  }
`;
