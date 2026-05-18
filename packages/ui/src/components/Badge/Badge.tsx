import { HTMLAttributes } from "react";
import * as styles from "./Badge.css.js";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge(props: BadgeProps) {
  return <span className={styles.root} {...props} />;
}
