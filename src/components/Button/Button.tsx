import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { button, spinner } from "./Button.css";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    size = "md",
    variant = "primary",
    type = "button",
    loading = false,
    disabled,
    children,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(button({ size, variant, loading }), className)}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? <span className={spinner} aria-hidden="true" /> : null}
      <span>{children}</span>
    </button>
  );
});
