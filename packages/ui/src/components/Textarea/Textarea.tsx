import { forwardRef } from "react";
import * as styles from "./Textarea.css";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  size?: "sm" | "md" | "lg";
  isInvalid?: boolean;
  isLoading?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
    <textarea
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

Textarea.displayName = "Textarea";
