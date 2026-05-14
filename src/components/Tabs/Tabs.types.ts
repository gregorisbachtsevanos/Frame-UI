import type { CSSProperties, ReactNode } from "react";
import type { ComponentSize, ComponentVariant } from "../../types/shared";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  size?: ComponentSize;
  variant?: ComponentVariant;
  className?: string;
  style?: CSSProperties;
}
