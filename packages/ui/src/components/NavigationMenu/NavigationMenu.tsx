import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./NavigationMenu.css.js";

export interface NavigationMenuProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={styles.root} {...props} />
  )
);

NavigationMenu.displayName = "NavigationMenu";
