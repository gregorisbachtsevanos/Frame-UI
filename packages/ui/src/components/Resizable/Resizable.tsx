import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Resizable.css.js";

export interface ResizableProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Resizable = forwardRef<HTMLDivElement, ResizableProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} {...props} />
  )
);

Resizable.displayName = "Resizable";
