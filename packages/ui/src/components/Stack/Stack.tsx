import { HTMLAttributes, forwardRef } from "react";
import * as styles from "./Stack.css";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = "column",
      gap = "md",
      align = "stretch",
      justify = "start",
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={[
        styles.root,
        styles.direction[direction],
        styles.gap[gap],
        styles.align[align],
        styles.justify[justify],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  )
);

Stack.displayName = "Stack";
