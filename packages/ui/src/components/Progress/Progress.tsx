import { forwardRef, ProgressHTMLAttributes } from "react";
import * as styles from "./Progress.css.js";

export interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "warning" | "danger";
}

export const Progress = forwardRef<HTMLProgressElement, ProgressProps>(
  (
    { value, max = 100, size = "md", color = "primary", className, ...props },
    ref
  ) => (
    <progress
      ref={ref}
      className={`${styles.root} ${styles.size[size]} ${styles.color[color]}`}
      value={value}
      max={max}
      {...props}
    />
  )
);

Progress.displayName = "Progress";
