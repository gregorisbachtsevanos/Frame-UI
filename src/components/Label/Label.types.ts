import type { CSSProperties, LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  style?: CSSProperties;
}
