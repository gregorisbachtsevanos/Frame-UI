import type { CSSProperties, HTMLAttributes } from "react";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: "sm" | "md" | "lg";
  minColumnWidth?: string;
  style?: CSSProperties;
}
