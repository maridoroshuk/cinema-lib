import { ReactNode } from 'react';

export interface IButtonProps {
  children: string | ReactNode;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
  value: string;
  onClick?: () => void;
  dataCy?: string;
}
