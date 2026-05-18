import { ReactNode, SelectHTMLAttributes } from "react";
import * as styles from "./Select.css.js";

export interface SelectOption {
  label: ReactNode;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
}

export function Select({ options, children, ...props }: SelectProps) {
  return (
    <select className={styles.root} {...props}>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      {children}
    </select>
  );
}
