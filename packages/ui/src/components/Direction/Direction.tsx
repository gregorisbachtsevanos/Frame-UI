import { HTMLAttributes } from "react";
import * as styles from "./Direction.css.js";

export interface DirectionProps extends HTMLAttributes<HTMLDivElement> {}

export function Direction(props: DirectionProps) {
  return <div className={styles.root} {...props} />;
}
