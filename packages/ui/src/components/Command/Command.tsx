import { HTMLAttributes } from "react";
import * as styles from "./Command.css.js";

export interface CommandProps extends HTMLAttributes<HTMLDivElement> {}

export function Command(props: CommandProps) {
  return <div className={styles.root} {...props} />;
}
