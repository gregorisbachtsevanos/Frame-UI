import { HTMLAttributes } from "react";
import * as styles from "./Sonner.css.js";

export interface SonnerProps extends HTMLAttributes<HTMLDivElement> {}

export function Sonner(props: SonnerProps) {
  return <div className={styles.root} {...props} />;
}
