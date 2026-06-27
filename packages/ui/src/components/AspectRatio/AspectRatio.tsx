import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./AspectRatio.css.js";

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number;
  children?: ReactNode;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (
    { ratio = 16 / 9, children, style, className, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={styles.root}
      style={{
        aspectRatio: ratio.toString(),
        ...style,
      }}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </div>
  )
);

AspectRatio.displayName = "AspectRatio";
