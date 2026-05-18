import { LabelHTMLAttributes } from "react";
import * as styles from "./Label.css.js";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: LabelProps) {
  return <label className={styles.root} {...props} />;
}
