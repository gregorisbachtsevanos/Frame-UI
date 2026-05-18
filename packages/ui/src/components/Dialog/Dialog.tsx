import { HTMLAttributes, ReactNode, useEffect } from "react";
import * as styles from "./Dialog.css.js";

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
}

export function Dialog({ open, onOpenChange, title, children, ...props }: DialogProps) {
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", onEscape);
    }

    return () => document.removeEventListener("keydown", onEscape);
  }, [open, onOpenChange]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.root} role="presentation" onClick={() => onOpenChange(false)}>
      <div role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()} {...props}>
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}
