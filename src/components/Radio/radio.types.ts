export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  value?: string;
  options: RadioOption[];
  onChange?: (value: string) => void;
}
