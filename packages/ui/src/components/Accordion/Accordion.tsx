import { HTMLAttributes, ReactNode, useId, useState } from "react";

import clsx from "clsx";

import * as styles from "./Accordion.css.js";

export interface AccordionProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({
  title,
  defaultOpen = false,
  children,
  ...props
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  const contentId = useId();
  const triggerId = useId();

  return (
    <div className={styles.root} {...props}>
      <button
        id={triggerId}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{title}</span>

        <span
          className={clsx(styles.icon, open && styles.iconOpen)}
          aria-hidden
        >
          ▼
        </span>
      </button>

      {open ? (
        <div
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          className={styles.content}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
