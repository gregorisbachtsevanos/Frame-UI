import { InputHTMLAttributes, useId } from "react";
import * as styles from "./Checkbox.css.js";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ id, label, ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label htmlFor={inputId} className={styles.root}>
      <input id={inputId} type="checkbox" {...props} />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
