import { cn } from "../../utils/cn";
import { Label } from "../Label";
import { errorText, formField, helpText } from "./FormField.css";
import type { FormFieldProps } from "./FormField.types";

export const FormField = ({
  label,
  htmlFor,
  helpText: help,
  error,
  children,
  className,
  ...props
}: FormFieldProps) => {
  return (
    <div className={cn(formField, className)} {...props}>
      {label ? <Label htmlFor={htmlFor}>{label}</Label> : null}
      {children}
      {error ? <span className={errorText}>{error}</span> : null}
      {!error && help ? <span className={helpText}>{help}</span> : null}
    </div>
  );
};
