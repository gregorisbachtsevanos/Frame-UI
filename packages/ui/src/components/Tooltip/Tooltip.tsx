import { forwardRef, HTMLAttributes, ReactNode, useState } from "react";
import * as styles from "./Tooltip.css.js";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
  content: ReactNode;
}

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  ({ content, children, className, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <span
        ref={ref}
        className={styles.root}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        {...props}
      >
        <span className={styles.trigger}>{children}</span>
        {open && (
          <span className={styles.content} role="tooltip">
            {content}
          </span>
        )}
      </span>
    );
  }
);

Tooltip.displayName = "Tooltip";
