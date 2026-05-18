import { ButtonHTMLAttributes } from "react";
import * as styles from "./Toggle.css.js";

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Toggle(props: ToggleProps) {
  return <button className={styles.root} {...props} />;
}
