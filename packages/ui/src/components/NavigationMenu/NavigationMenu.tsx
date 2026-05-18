import { HTMLAttributes } from "react";
import * as styles from "./NavigationMenu.css.js";

export interface NavigationMenuProps extends HTMLAttributes<HTMLElement> {}

export function NavigationMenu(props: NavigationMenuProps) {
  return <nav className={styles.root} {...props} />;
}
