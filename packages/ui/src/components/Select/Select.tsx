import { forwardRef, ReactNode } from "react";
import * as styles from "./Select.css";

export interface SelectOption {
  label: ReactNode;
  value: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: "sm" | "md" | "lg";
  isInvalid?: boolean;
  isLoading?: boolean;
  options?: SelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = "md",
      isInvalid = false,
      isLoading = false,
      disabled,
      options,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <select
      ref={ref}
      disabled={disabled || isLoading}
      className={[
        styles.root,
        styles.size[size],
        isInvalid && styles.invalid,
        (disabled || isLoading) && styles.disabled,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={isInvalid}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      {children}
    </select>
  )
);

Select.displayName = "Select";
