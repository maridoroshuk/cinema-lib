import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral900};
  padding: ${({ theme }) => `${theme.spaces[30]}px 0`};

  color: ${({ theme }) => theme.colors.neutral000};
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
  background-color: ${({ theme }) => theme.colors.neutral900};
  border: none;
  outline: none;
  border-bottom: ${({ theme, error }) =>
    `2.5px solid ${error ? theme.colors.danger : theme.colors.neutral000}`};
  color: ${({ theme, error }) =>
    error ? theme.colors.danger : theme.colors.neutral000};
  padding: ${({ theme }) => `${theme.spaces[15]}px 0`};
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[20]}px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral000};
  }

  @media (min-width: ${({ theme }) => theme.screenSizes[900]}px) {
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

export const AdditionalText = styled.p`
  position: absolute;
  left: 0;
  font-style: italic;
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[15]}px;
  word-break: break-word;
`;
