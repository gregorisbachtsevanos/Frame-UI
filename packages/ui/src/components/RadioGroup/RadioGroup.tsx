import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./RadioGroup.css.js";

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  orientation?: "vertical" | "horizontal";
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ orientation = "vertical", className, ...props }, ref) => (
    <div
      ref={ref}
      className={`${styles.root} ${styles.orientation[orientation]}`}
      role="radiogroup"
      {...props}
    />
  )
);

RadioGroup.displayName = "RadioGroup";
