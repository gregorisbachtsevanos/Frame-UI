import { HTMLAttributes } from "react";
import * as styles from "./Spinner.css.js";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {}

export function Spinner(props: SpinnerProps) {
  return <div className={styles.root} {...props} />;
}
