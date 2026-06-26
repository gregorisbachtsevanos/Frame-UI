import { forwardRef, InputHTMLAttributes, useId } from "react";
import * as styles from "./Switch.css.js";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, label, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <label htmlFor={inputId} className={styles.root}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          role="switch"
          className={styles.input}
          {...props}
        />
        {label ? <span className={styles.label}>{label}</span> : null}
      </label>
    );
  }
);

Switch.displayName = "Switch";
