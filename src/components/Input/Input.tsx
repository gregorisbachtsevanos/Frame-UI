import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { input } from "./Input.css";
import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = "text", size = "md", variant = "primary", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(input({ size, variant }), className)}
      {...props}
    />
  );
});
