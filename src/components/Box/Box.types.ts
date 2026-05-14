import type { CSSProperties, ElementType, HTMLAttributes } from "react";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}
