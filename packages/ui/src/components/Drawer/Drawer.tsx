import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Drawer.css.js";

export interface DrawerProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  side?: "left" | "right";
}

export const Drawer = forwardRef<HTMLElement, DrawerProps>(
  ({ side = "left", className, ...props }, ref) => (
    <aside
      ref={ref}
      className={`${styles.root} ${styles.side[side]}`}
      {...props}
    />
  )
);

Drawer.displayName = "Drawer";
