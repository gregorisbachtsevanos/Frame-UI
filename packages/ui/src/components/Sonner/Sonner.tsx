import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Sonner.css.js";

export interface SonnerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Sonner = forwardRef<HTMLDivElement, SonnerProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} {...props} />
  )
);

Sonner.displayName = "Sonner";
