import { ReactNode } from 'react';

export interface IUnderlineButton {
  children: ReactNode;
  handleButtonClick: () => void;
  value?: string;
}
