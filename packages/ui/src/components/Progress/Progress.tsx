import { ProgressHTMLAttributes } from "react";
import * as styles from "./Progress.css.js";

export interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  value: number;
  max?: number;
}

export function Progress({ value, max = 100, ...props }: ProgressProps) {
  return <progress className={styles.root} value={value} max={max} {...props} />;
}
