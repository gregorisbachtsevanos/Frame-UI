import { HTMLAttributes } from "react";
import * as styles from "./Empty.css.js";

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {}

export function Empty(props: EmptyProps) {
  return <div className={styles.root} {...props} />;
}
