import { HTMLAttributes, ReactNode, useState } from "react";
import * as styles from "./Popover.css.js";

export interface PopoverProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  trigger: ReactNode;
  content: ReactNode;
}

export function Popover({ trigger, content, ...props }: PopoverProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root} {...props}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {trigger}
      </button>
      {open ? <div role="dialog">{content}</div> : null}
    </div>
  );
}
