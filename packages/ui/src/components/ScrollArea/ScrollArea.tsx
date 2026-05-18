import { HTMLAttributes } from "react";
import * as styles from "./ScrollArea.css.js";

export interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {}

export function ScrollArea(props: ScrollAreaProps) {
  return <div className={styles.root} {...props} />;
}
