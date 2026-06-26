import { HTMLAttributes, forwardRef } from "react";
import * as styles from "./Text.css";

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "base" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "muted" | "subtle";
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    { size = "base", weight = "normal", color = "default", className, ...props },
    ref
  ) => (
    <span
      ref={ref}
      className={[
        styles.root,
        styles.size[size],
        styles.weight[weight],
        styles.color[color],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  )
);

Text.displayName = "Text";
