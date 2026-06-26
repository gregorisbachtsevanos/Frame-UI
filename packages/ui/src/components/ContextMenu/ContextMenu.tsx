import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./ContextMenu.css.js";

export interface ContextMenuProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} role="menu" {...props} />
  )
);

ContextMenu.displayName = "ContextMenu";
