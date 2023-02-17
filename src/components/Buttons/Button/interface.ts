export interface IButtonProps {
  children: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
  value: string;
  onClick?: () => void;
  dataCy: string;
}
