import { HTMLAttributes } from "react";
import * as styles from "./Calendar.css.js";

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {}

export function Calendar(props: CalendarProps) {
  return <div className={styles.root} {...props} />;
}
