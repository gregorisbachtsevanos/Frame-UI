import { HTMLAttributes } from "react";
import * as styles from "./ToggleGroup.css.js";

export interface ToggleGroupProps extends HTMLAttributes<HTMLDivElement> {}

export function ToggleGroup(props: ToggleGroupProps) {
  return <div className={styles.root} {...props} />;
}
