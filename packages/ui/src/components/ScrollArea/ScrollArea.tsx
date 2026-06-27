import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./ScrollArea.css.js";

export interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} {...props} />
  )
);

ScrollArea.displayName = "ScrollArea";
