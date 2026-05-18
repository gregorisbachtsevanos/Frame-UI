import { HTMLAttributes, useEffect, useState } from "react";
import * as styles from "./Toast.css.js";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  duration?: number;
  onOpenChange?: (open: boolean) => void;
}

export function Toast({ open = true, duration = 3000, onOpenChange, children, ...props }: ToastProps) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    setVisible(open);
  }, [open]);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      onOpenChange?.(false);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, onOpenChange, visible]);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.root} role="status" aria-live="polite" {...props}>
      {children}
    </div>
  );
}
