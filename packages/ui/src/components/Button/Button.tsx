import { ButtonHTMLAttributes } from "react";
import * as styles from "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={styles.button({
        variant,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
