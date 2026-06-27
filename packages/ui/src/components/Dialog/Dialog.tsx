import { HTMLAttributes, ReactNode, useEffect } from "react";
import * as styles from "./Dialog.css.js";

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
}

export function Dialog({ open, onOpenChange, title, children, className, ...props }: DialogProps) {
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", onEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) {
    return null;
  }

  return (
    <div
      className={styles.root}
      role="presentation"
      onClick={() => onOpenChange(false)}
    >
      <div
        className={styles.content}
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
        {...props}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
