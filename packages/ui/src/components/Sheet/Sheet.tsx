import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Sheet.css.js";

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  ({ side = "bottom", className, ...props }, ref) => (
    <div
      ref={ref}
      className={`${styles.root} ${styles.side[side]}`}
      {...props}
    />
  )
);

Sheet.displayName = "Sheet";
