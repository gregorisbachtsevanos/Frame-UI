import type { CSSProperties, InputHTMLAttributes } from "react";
import type { ComponentSize, ComponentVariant } from "../../types/shared";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: ComponentSize;
  variant?: ComponentVariant;
  className?: string;
  style?: CSSProperties;
}
