import { InputHTMLAttributes } from "react";
import * as styles from "./InputOTP.css.js";

export interface InputOTPProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputOTP(props: InputOTPProps) {
  return <input inputMode="numeric" className={styles.root} {...props} />;
}
