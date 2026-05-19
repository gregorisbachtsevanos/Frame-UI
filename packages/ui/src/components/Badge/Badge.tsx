import { HTMLAttributes } from "react";
import * as styles from "./Badge.css.js";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "primary" | "success" | "warning" | "danger";

  size?: "sm" | "md" | "lg";

  solid?: boolean;
}

export function Badge({
  tone = "primary",
  size = "md",
  solid = false,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        styles.root,
        styles.size[size],
        solid ? styles.solidTone[tone] : styles.tone[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
