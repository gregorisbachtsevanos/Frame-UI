import { InputHTMLAttributes } from "react";
import * as styles from "./Combobox.css.js";

export interface ComboboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Combobox(props: ComboboxProps) {
  return <input className={styles.root} {...props} />;
}
