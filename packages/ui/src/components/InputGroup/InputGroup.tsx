import { HTMLAttributes } from "react";
import * as styles from "./InputGroup.css.js";

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {}

export function InputGroup(props: InputGroupProps) {
  return <div className={styles.root} {...props} />;
}
