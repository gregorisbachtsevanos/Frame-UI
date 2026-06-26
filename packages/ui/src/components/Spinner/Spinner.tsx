import { forwardRef, HTMLAttributes } from "react";
import * as styles from "./Spinner.css.js";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "danger";
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "md", color = "primary", className, ...props }, ref) => (
    <div
      ref={ref}
      className={`${styles.root} ${styles.size[size]} ${styles.color[color]}`}
      role="status"
      aria-live="polite"
      {...props}
    />
  )
);

Spinner.displayName = "Spinner";
