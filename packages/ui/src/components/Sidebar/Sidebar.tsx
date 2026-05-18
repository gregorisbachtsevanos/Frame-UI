import { HTMLAttributes } from "react";
import * as styles from "./Sidebar.css.js";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {}

export function Sidebar(props: SidebarProps) {
  return <aside className={styles.root} {...props} />;
}
