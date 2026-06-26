import { forwardRef } from "react";
import * as styles from "./Label.css";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required, size = "md", className, children, ...props }, ref) => (
    <label
      ref={ref}
      className={[styles.root, styles.size[size], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
      {required && <span className={styles.required}>*</span>}
    </label>
  )
);

Label.displayName = "Label";
