import { HTMLAttributes } from "react";
import * as styles from "./Separator.css.js";

export interface SeparatorProps extends HTMLAttributes<HTMLHRElement> {}

export function Separator(props: SeparatorProps) {
  return <hr className={styles.root} {...props} />;
}
