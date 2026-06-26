import { forwardRef, useId } from "react";
import * as styles from "./Checkbox.css";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, size = "md", className, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <label htmlFor={inputId} className={[styles.root, styles.size[size], disabled && styles.disabled, className].filter(Boolean).join(" ")}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          disabled={disabled}
          className={styles.input}
          aria-disabled={disabled}
          {...props}
        />
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
