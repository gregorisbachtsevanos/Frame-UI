import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Field.css.js";

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  error?: string;
  hint?: string;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ error, hint, className, ...props }, ref) => (
    <div ref={ref} className={styles.root} {...props}>
      {props.children}
      {hint && <div className={styles.hint}>{hint}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
);

Field.displayName = "Field";
