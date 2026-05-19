import { ReactNode, useEffect } from "react";
import * as styles from "./AlertDialog.css.js";

export interface AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title: ReactNode;
  description?: ReactNode;

  cancelLabel?: ReactNode;
  confirmLabel?: ReactNode;

  destructive?: boolean;

  onConfirm: () => void;
}

export function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  destructive = true,
  onConfirm,
}: AlertDialogProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={() => onOpenChange(false)}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={styles.root}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id="alert-dialog-title" className={styles.title}>
            {title}
          </h2>

          {description ? (
            <p id="alert-dialog-description" className={styles.description}>
              {description}
            </p>
          ) : null}
        </div>

        <div className={styles.footer}>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonTone.secondary}`}
            onClick={() => onOpenChange(false)}
          >
            {cancelLabel}
          </button>

          <button
            type="button"
            className={`${styles.button} ${
              destructive
                ? styles.buttonTone.danger
                : styles.buttonTone.secondary
            }`}
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
