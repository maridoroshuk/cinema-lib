import { Field } from 'formik';
import styled from 'styled-components';

export const StyledField = styled(Field)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.neutral000};
  font-size: ${({ theme }) => theme.sizes.fontSize[16]}px;
  line-height: ${({ theme }) => theme.sizes.lineHeight[24]}px;
  font-weight: ${({ theme }) => theme.sizes.fontWeight[400]};
  font-family: ${({ theme }) => theme.fontFamily.Inter};
  width: 100%;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral000};
    opacity: 0.5;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.width[400]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral300};
  margin-top: ${({ theme }) => theme.spaces[25]}px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius[25]}px;
  padding: ${({ theme }) => theme.spaces[10]}px
    ${({ theme }) => theme.spaces[25]}px;
  border: none;
`;

export const Label = styled.label``;

export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.sizes.width[25]}px;
`;
