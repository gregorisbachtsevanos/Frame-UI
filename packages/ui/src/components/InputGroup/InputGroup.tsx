import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./InputGroup.css.js";

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} {...props} />
  )
);

InputGroup.displayName = "InputGroup";
