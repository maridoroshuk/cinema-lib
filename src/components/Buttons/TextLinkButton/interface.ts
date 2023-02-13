import { ReactNode } from 'react';

export interface ITextLinkButtonProps {
  children: ReactNode;
  value: TAuthType;
  onClick: () => void;
}
