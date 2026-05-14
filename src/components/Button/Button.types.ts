import type { ButtonHTMLAttributes, CSSProperties } from "react";
import type { ComponentSize, ComponentVariant } from "../../types/shared";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ComponentSize;
  variant?: ComponentVariant;
  loading?: boolean;
  className?: string;
  style?: CSSProperties;
}
