export interface IInputProps {
  type: string;
  name: string;
  label?: string;
  icon?: string;
  placeholder?: string;
  helperText?: string;
  onInputChange?: () => void;
  dataCy?: string;
}
