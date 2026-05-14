import clsx from "clsx";
import * as styles from "./Button.css";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  intent = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.base,
        styles.intent[intent],
        styles.size[size],
        fullWidth && styles.fullWidth,
        loading && styles.loading,
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};
