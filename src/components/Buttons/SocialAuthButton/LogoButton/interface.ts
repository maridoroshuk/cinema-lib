import { ReactNode } from 'react';

export interface ILogoButtonProps {
  children: ReactNode;
  config: TConfigLogoButton;
  value: TSocialMedia;
  onClick: () => void;
}
