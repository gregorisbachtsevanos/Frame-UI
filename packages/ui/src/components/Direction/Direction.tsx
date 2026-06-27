import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Direction.css.js";

export interface DirectionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  dir?: "ltr" | "rtl";
}

export const Direction = forwardRef<HTMLDivElement, DirectionProps>(
  ({ dir = "ltr", className, ...props }, ref) => (
    <div ref={ref} className={styles.root} dir={dir} {...props} />
  )
);

Direction.displayName = "Direction";
