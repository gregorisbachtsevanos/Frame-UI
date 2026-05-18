import { HTMLAttributes } from "react";
import * as styles from "./Chart.css.js";

export interface ChartProps extends HTMLAttributes<HTMLDivElement> {}

export function Chart(props: ChartProps) {
  return <div className={styles.root} {...props} />;
}
