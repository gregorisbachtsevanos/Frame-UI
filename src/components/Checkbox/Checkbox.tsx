import * as styles from "./checkbox.css";
import type { CheckboxProps } from "./checkbox.types";

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <label className={styles.wrapper}>
      <input className={styles.input} type="checkbox" {...props} />

      <div className={styles.box} />

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
