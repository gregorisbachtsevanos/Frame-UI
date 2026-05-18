import { HTMLAttributes, ReactNode, useId, useState } from "react";
import * as styles from "./Collapsible.css.js";

export interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  defaultOpen?: boolean;
}

export function Collapsible({ trigger, defaultOpen = false, children, ...props }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className={styles.root} {...props}>
      <button type="button" aria-expanded={open} aria-controls={contentId} onClick={() => setOpen((value) => !value)}>
        {trigger}
      </button>
      <div id={contentId} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
