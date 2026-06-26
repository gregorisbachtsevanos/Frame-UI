import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./ToggleGroup.css.js";

export interface ToggleGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
}

export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ size = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={`${styles.root} ${styles.size[size]}`}
      role="group"
      {...props}
    />
  )
);

ToggleGroup.displayName = "ToggleGroup";
