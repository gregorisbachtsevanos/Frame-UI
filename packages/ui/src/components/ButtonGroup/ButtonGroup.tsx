import { HTMLAttributes } from "react";
import * as styles from "./ButtonGroup.css.js";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {}

export function ButtonGroup(props: ButtonGroupProps) {
  return <div className={styles.root} {...props} />;
}
