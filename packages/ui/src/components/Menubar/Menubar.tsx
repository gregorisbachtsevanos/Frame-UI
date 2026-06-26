import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Menubar.css.js";

export interface MenubarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={styles.root}
      role="menubar"
      {...props}
    />
  )
);

Menubar.displayName = "Menubar";
