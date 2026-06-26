import { forwardRef } from "react";
import * as styles from "./Divider.css";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = "horizontal", variant = "solid", className, ...props }, ref) => (
    <hr
      ref={ref}
      className={[
        styles.root,
        styles.orientation[orientation],
        styles.variant[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  )
);

Divider.displayName = "Divider";
