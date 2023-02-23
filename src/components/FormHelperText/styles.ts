import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spaces[20]}px;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[20]}px;
  border-radius: ${({ theme }) => theme.spaces[10]}px;
  color: ${({ theme }) => theme.colors.neutral000};
  background-color: ${({ theme }) => theme.colors.neutral300Transparent};
`;
