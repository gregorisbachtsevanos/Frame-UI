import { InputHTMLAttributes } from "react";
import * as styles from "./DatePicker.css.js";

export interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {}

export function DatePicker(props: DatePickerProps) {
  return <input type="date" className={styles.root} {...props} />;
}
