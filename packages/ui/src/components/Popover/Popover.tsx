import { forwardRef, HTMLAttributes, ReactNode, useState } from "react";
import * as styles from "./Popover.css.js";

export interface PopoverProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  trigger: ReactNode;
  content: ReactNode;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ trigger, content, className, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <div ref={ref} className={styles.root} {...props}>
        <button
          className={styles.trigger}
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {trigger}
        </button>
        {open && (
          <div className={styles.content} role="dialog">
            {content}
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = "Popover";
