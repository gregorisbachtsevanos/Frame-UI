import { forwardRef, HTMLAttributes } from "react";
import * as styles from "./Skeleton.css.js";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  count?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { width = "100%", height = "16px", circle = false, count = 1, className, style, ...props },
    ref
  ) => {
    const skeletons = Array.from({ length: count });

    return (
      <>
        {skeletons.map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? ref : undefined}
            className={`${styles.root} ${circle ? styles.circle : ""}`}
            style={{
              width: typeof width === "number" ? `${width}px` : width,
              height: typeof height === "number" ? `${height}px` : height,
              ...style,
            }}
            {...props}
          />
        ))}
      </>
    );
  }
);

Skeleton.displayName = "Skeleton";
