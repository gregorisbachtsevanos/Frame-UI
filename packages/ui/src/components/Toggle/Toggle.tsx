import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import * as styles from "./Toggle.css.js";

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    { pressed = false, size = "md", variant = "default", className, ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        styles.root,
        styles.size[size],
        styles.variant[variant],
        pressed && styles.pressed
      )}
      aria-pressed={pressed}
      {...props}
    />
  )
);

Toggle.displayName = "Toggle";
