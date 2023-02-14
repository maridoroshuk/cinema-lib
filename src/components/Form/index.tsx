import React from 'react';
import { Formik } from 'formik';

import { IFormProps } from './interface';
import { StyledForm } from './styles';

export const Form = <T extends {}>({
  children,
  initialValues,
  validate,
  onFormSubmit,
}: IFormProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onFormSubmit}
    >
      <StyledForm>{children}</StyledForm>
    </Formik>
  );
};
