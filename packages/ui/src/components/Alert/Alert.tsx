import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import * as styles from "./Alert.css.js";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "success" | "warning" | "danger";

  icon?: ReactNode;
}

function getDefaultIcon(tone: NonNullable<AlertProps["tone"]>) {
  switch (tone) {
    case "success":
      return "✓";

    case "warning":
      return "⚠";

    case "danger":
      return "⨯";

    default:
      return "ℹ";
  }
}

export function Alert({
  tone = "info",
  icon,
  children,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={clsx(styles.root, styles.tones[tone], className)}
      {...props}
    >
      <div className={styles.icon}>{icon ?? getDefaultIcon(tone)}</div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
