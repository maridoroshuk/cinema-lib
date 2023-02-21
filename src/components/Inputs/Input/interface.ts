import { ChangeEvent } from 'react';

export interface IInputProps {
  type: string;
  name: string;
  label?: string;
  icon?: string;
  placeholder?: string;
  helperText?: string;
  onInputBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}
