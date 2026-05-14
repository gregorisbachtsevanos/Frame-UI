import type { CSSProperties, ReactNode } from "react";

export interface FormFieldProps {
  label?: ReactNode;
  helpText?: ReactNode;
  error?: ReactNode;
  className?: string;
  style?: CSSProperties;
  htmlFor?: string;
  children: ReactNode;
}
