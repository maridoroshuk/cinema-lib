import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pageBackground};
  padding: ${({ theme }) => `${theme.spaces[30]}px 0`};

  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const Label = styled.label<{ icon?: string }>`
  width: 100%;
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[20]}px;
  word-break: break-word;
`;

export const StyledField = styled(Field)<{
  error: boolean;
  icon?: string;
}>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pageBackground};
  border: none;
  outline: none;
  border-bottom: ${({ theme, error }) =>
    `2.5px solid ${error ? theme.colors.darkRed : theme.colors.defaultWhite}`};
  color: ${({ theme, error }) =>
    error ? theme.colors.darkRed : theme.colors.defaultWhite};
  padding: ${({ theme }) => `${theme.spaces[15]}px 0`};
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[20]}px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.defaultWhite};
  }

  @media (min-width: ${({ theme }) => theme.screenSizes[860]}px) {
    max-width: ${({ theme }) => theme.sizes.width[630]}px;
  }
`;

export const Icon = styled.img`
  display: none;
  width: ${({ theme }) => theme.sizes.width[50]}px;
  height: ${({ theme }) => theme.sizes.width[50]}px;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.spaces[30]}px;
  vertical-align: bottom;
  aspect-ratio: 1 / 1;

  @media (min-width: ${({ theme }) => theme.screenSizes[860]}px) {
    display: inline-block;
  }
`;
