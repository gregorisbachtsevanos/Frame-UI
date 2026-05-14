import { ReactNode } from "react";
import * as styles from "./FormField.css";

interface Props {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

export const FormField = ({ label, error, hint, children }: Props) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      {children}

      {error && <div className={styles.error}>{error}</div>}
      {!error && hint && <div className={styles.hint}>{hint}</div>}
    </div>
  );
};
