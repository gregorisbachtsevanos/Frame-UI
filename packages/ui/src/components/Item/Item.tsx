import { HTMLAttributes } from "react";
import * as styles from "./Item.css.js";

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {}

export function Item(props: ItemProps) {
  return <div className={styles.root} {...props} />;
}
