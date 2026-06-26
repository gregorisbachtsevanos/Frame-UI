import { forwardRef } from "react";
import * as styles from "./Input.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  isInvalid?: boolean;
  isLoading?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      isInvalid = false,
      isLoading = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => (
    <input
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
    />
  )
);

Input.displayName = "Input";
