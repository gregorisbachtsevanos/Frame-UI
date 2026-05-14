import type { CSSProperties, ElementType, HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?: "sm" | "md" | "lg";
  tone?: "default" | "muted" | "accent" | "danger";
  style?: CSSProperties;
}

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?: "sm" | "md" | "lg";
  style?: CSSProperties;
}
