import { HTMLAttributes } from "react";
import * as styles from "./ContextMenu.css.js";

export interface ContextMenuProps extends HTMLAttributes<HTMLDivElement> {}

export function ContextMenu(props: ContextMenuProps) {
  return <div className={styles.root} {...props} />;
}
