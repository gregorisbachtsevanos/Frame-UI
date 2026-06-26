import { forwardRef } from "react";
import * as styles from "./Spacer.css";

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  axis?: "horizontal" | "vertical";
}

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ size = "md", axis = "vertical", className, ...props }, ref) => (
    <div
      ref={ref}
      className={[styles.root, styles.size[size], styles.axis[axis], className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
      {...props}
    />
  )
);

Spacer.displayName = "Spacer";
