import styled from 'styled-components';

export const Wrapper = styled.div<{
  background: string;
}>`
  padding: ${({ theme }) => theme.spaces[20]}px;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[20]}px;
  border-radius: ${({ theme }) => theme.spaces[10]}px;
  color: ${({ theme }) => theme.colors.defaultBlack};
  background-color: ${({ background }) => background};
`;
