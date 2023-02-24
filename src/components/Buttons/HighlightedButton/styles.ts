import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font-weight: ${({ theme }) => theme.sizes.fontWeight[300]};
  font-size: ${({ theme }) => theme.sizes.fontSize[24]}px;
  line-height: ${({ theme }) => theme.sizes.lineHeight[54]}px;
  color: ${({ theme }) => theme.colors.neutral000};
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;
