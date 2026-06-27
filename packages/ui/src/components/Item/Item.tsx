import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Item.css.js";

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} {...props} />
  )
);

Item.displayName = "Item";
