import { ReactNode } from 'react';
import { FormikHelpers } from 'formik';

export interface IFormProps<T> {
  children: ReactNode;
  initialValues: T;
  validate: (values: T) => void;
  onFormSubmit: (submitValues: T, { setSubmitting }: FormikHelpers<T>) => void;
  id?: string;
}
