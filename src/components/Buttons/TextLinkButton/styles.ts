import styled from 'styled-components';

export const StyledLink = styled.button`
  font-style: italic;
  font-size: ${({ theme }) => theme.sizes.fontSize[20]}px;
  color: ${({ theme }) => theme.colors.defaultWhite};
  margin-left: ${({ theme }) => theme.spaces[10]}px;
  border: none;
  outline: none;
  text-decoration: underline;
  cursor: pointer;
  background-color: transparent;
`;
