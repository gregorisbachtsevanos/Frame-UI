import { HTMLAttributes } from "react";
import * as styles from "./Alert.css.js";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "success" | "warning" | "danger";
}

export function Alert({ tone = "info", ...props }: AlertProps) {
  return <div role="alert" data-tone={tone} className={styles.root} {...props} />;
}
