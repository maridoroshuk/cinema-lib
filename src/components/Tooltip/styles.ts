import styled from 'styled-components';

export const Text = styled.span`
  width: 100%;
  word-break: break-word;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[15]}px;
  background-color: ${({ theme }) => theme.colors.neutral050Transparent};
  color: ${({ theme }) => theme.colors.neutral000};
  text-align: center;
  padding: ${({ theme }) => theme.spaces[10]}px;
  border-radius: ${({ theme }) => theme.spaces[5]}px;
  position: absolute;
  bottom: 100%;
  left: 0;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -${({ theme }) => theme.spaces[10]}px;
    border-width: ${({ theme }) => theme.spaces[10]}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.neutral050Transparent}
      transparent transparent transparent;
  }
`;
