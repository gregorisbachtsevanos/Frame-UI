import { HTMLAttributes, ReactNode } from "react";
import * as styles from "./AspectRatio.css.js";

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number;
  children?: ReactNode;
}

export function AspectRatio({
  ratio = 16 / 9,
  children,
  style,
  ...props
}: AspectRatioProps) {
  return (
    <div
      className={styles.root}
      style={{
        aspectRatio: ratio.toString(),
        ...style,
      }}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}
