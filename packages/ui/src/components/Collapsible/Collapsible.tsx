import { forwardRef, HTMLAttributes, ReactNode, useId, useState } from "react";
import * as styles from "./Collapsible.css.js";

export interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  defaultOpen?: boolean;
}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    { trigger, defaultOpen = false, children, className, ...props },
    ref
  ) => {
    const [open, setOpen] = useState(defaultOpen);
    const contentId = useId();
    const triggerId = useId();

    return (
      <div ref={ref} className={styles.root} {...props}>
        <button
          id={triggerId}
          type="button"
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() => setOpen((value) => !value)}
        >
          {trigger}
        </button>
        {open && (
          <div id={contentId} className={styles.content} role="region" aria-labelledby={triggerId}>
            {children}
          </div>
        )}
      </div>
    );
  }
);

Collapsible.displayName = "Collapsible";
