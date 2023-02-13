import { FormikHelpers } from 'formik';
import { ReactNode } from 'react';

export interface IFormProps<T> {
  children: ReactNode;
  initialValues: T;
  validate: (values: T) => void;
  onFormSubmit: (submitValues: T, { setSubmitting }: FormikHelpers<T>) => void;
}
