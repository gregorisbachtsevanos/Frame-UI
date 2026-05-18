import { HTMLAttributes } from "react";
import * as styles from "./Field.css.js";

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export function Field(props: FieldProps) {
  return <div className={styles.root} {...props} />;
}
