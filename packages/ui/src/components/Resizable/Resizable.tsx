import { HTMLAttributes } from "react";
import * as styles from "./Resizable.css.js";

export interface ResizableProps extends HTMLAttributes<HTMLDivElement> {}

export function Resizable(props: ResizableProps) {
  return <div className={styles.root} {...props} />;
}
