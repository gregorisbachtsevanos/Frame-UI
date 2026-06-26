import { forwardRef, InputHTMLAttributes } from "react";
import * as styles from "./Combobox.css.js";

export interface ComboboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  sizeVariant?: "sm" | "md" | "lg";
}

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  ({ sizeVariant = "md", className, ...props }, ref) => (
    <input
      ref={ref}
      type="text"
      className={`${styles.root} ${styles.size[sizeVariant]}`}
      role="combobox"
      aria-autocomplete="list"
      {...props}
    />
  )
);

Combobox.displayName = "Combobox";
