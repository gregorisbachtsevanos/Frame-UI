import { HTMLAttributes } from "react";
import * as styles from "./Drawer.css.js";

export interface DrawerProps extends HTMLAttributes<HTMLElement> {}

export function Drawer(props: DrawerProps) {
  return <aside className={styles.root} {...props} />;
}
