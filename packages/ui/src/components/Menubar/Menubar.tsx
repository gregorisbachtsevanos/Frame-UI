import { HTMLAttributes } from "react";
import * as styles from "./Menubar.css.js";

export interface MenubarProps extends HTMLAttributes<HTMLDivElement> {}

export function Menubar(props: MenubarProps) {
  return <div className={styles.root} {...props} />;
}
