import type { CSSProperties, ReactNode } from "react";
import type { ComponentSize } from "../../types/shared";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: ComponentSize;
  closeOnOverlayClick?: boolean;
  className?: string;
  style?: CSSProperties;
}
