import type { CSSProperties, HTMLAttributes } from "react";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  gap?: "sm" | "md" | "lg";
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
  style?: CSSProperties;
}
