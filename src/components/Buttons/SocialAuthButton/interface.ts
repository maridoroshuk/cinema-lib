export interface ISocialAuthButtonProps {
  variant: 'google' | 'facebook' | 'github';
  children: string,
  handleButtonClick: () => void;
}
