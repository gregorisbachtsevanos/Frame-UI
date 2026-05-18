import { InputHTMLAttributes } from "react";
import * as styles from "./Input.css.js";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return <input className={styles.root} {...props} />;
}
