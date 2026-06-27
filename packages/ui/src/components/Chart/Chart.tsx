import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Chart.css.js";

export interface ChartProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Chart = forwardRef<HTMLDivElement, ChartProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} {...props} />
  )
);

Chart.displayName = "Chart";
