import { InputHTMLAttributes, useId } from "react";
import * as styles from "./Switch.css.js";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Switch({ id, label, ...props }: SwitchProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label htmlFor={inputId} className={styles.root}>
      <input id={inputId} type="checkbox" role="switch" {...props} />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
