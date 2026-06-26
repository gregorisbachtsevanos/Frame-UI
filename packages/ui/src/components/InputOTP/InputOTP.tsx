import { forwardRef, InputHTMLAttributes } from "react";
import * as styles from "./InputOTP.css.js";

export interface InputOTPProps extends InputHTMLAttributes<HTMLInputElement> {
  length?: number;
}

export const InputOTP = forwardRef<HTMLInputElement, InputOTPProps>(
  ({ length = 6, className, ...props }, ref) => (
    <input
      ref={ref}
      inputMode="numeric"
      maxLength={length}
      className={styles.root}
      {...props}
    />
  )
);

InputOTP.displayName = "InputOTP";
