import clsx from "clsx";
import * as styles from "./Input.css";
import type { InputProps } from "./Input.types";

export const Input = ({ invalid, className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(styles.input, invalid && styles.invalid, className)}
      {...props}
    />
  );
};
