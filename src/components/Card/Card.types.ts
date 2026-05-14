import type { CSSProperties, HTMLAttributes } from "react";
import type { ComponentSize, ComponentVariant } from "../../types/shared";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: ComponentSize;
  variant?: ComponentVariant;
  className?: string;
  style?: CSSProperties;
}

export interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
}
