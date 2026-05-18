import { HTMLAttributes } from "react";
import * as styles from "./Sheet.css.js";

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {}

export function Sheet(props: SheetProps) {
  return <div className={styles.root} {...props} />;
}
