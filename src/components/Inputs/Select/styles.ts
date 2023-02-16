import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral900};
  padding: ${({ theme }) => `${theme.spaces[30]}px 0`};
  color: ${({ theme }) => theme.colors.neutral000};
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[20]}px;
`;

export const Label = styled.label`
  width: 100%;
`;

export const StyledSelect = styled(Field)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral900};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.neutral000};
  padding: ${({ theme }) => `${theme.spaces[15]}px 0`};
  font-family: ${({ theme }) => theme.fontFamily.Poppins};
  font-size: ${({ theme }) => theme.sizes.fontSize[20]}px;
`;

export const Option = styled.option``;
