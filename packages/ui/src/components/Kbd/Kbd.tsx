import { HTMLAttributes } from "react";
import * as styles from "./Kbd.css.js";

export interface KbdProps extends HTMLAttributes<HTMLElement> {}

export function Kbd(props: KbdProps) {
  return <kbd className={styles.root} {...props} />;
}
