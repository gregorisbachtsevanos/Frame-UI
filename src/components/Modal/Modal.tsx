import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";
import {
  body,
  closeButton,
  content,
  footer,
  header,
  overlay,
  title
} from "./Modal.css";
import type { ModalProps } from "./Modal.types";

export const Modal = ({
  open,
  onOpenChange,
  title: titleContent,
  children,
  footer: footerContent,
  size = "md",
  closeOnOverlayClick = true,
  className,
  style
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onEscape);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [open, onOpenChange]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className={overlay}
      onMouseDown={(event) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) {
          onOpenChange(false);
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleContent ? titleId : undefined}
        tabIndex={-1}
        className={cn(content({ size }), className)}
        style={style}
      >
        <div className={header}>
          {titleContent ? (
            <h2 id={titleId} className={title}>
              {titleContent}
            </h2>
          ) : (
            <span />
          )}
          <button
            type="button"
            className={closeButton}
            aria-label="Close dialog"
            onClick={() => onOpenChange(false)}
          >
            x
          </button>
        </div>
        <div className={body}>{children}</div>
        {footerContent ? <div className={footer}>{footerContent}</div> : null}
      </div>
    </div>,
    document.body
  );
};
