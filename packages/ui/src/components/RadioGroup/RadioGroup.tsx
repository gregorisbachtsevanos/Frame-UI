import { HTMLAttributes } from "react";
import * as styles from "./RadioGroup.css.js";

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {}

export function RadioGroup(props: RadioGroupProps) {
  return <div className={styles.root} {...props} />;
}
