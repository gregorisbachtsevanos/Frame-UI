import { forwardRef, SelectHTMLAttributes } from "react";
import * as styles from "./NativeSelect.css.js";

export interface NativeSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  sizeVariant?: "sm" | "md" | "lg";
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ sizeVariant = "md", className, ...props }, ref) => (
    <select
      ref={ref}
      className={`${styles.root} ${styles.size[sizeVariant]}`}
      {...props}
    />
  )
);

NativeSelect.displayName = "NativeSelect";
