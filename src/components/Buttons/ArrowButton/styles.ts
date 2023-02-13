import styled from 'styled-components';

export const Wrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const Arrow = styled.img`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.width[30]}px;
`;
