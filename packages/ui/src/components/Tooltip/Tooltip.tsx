import { HTMLAttributes, ReactNode, useState } from "react";
import * as styles from "./Tooltip.css.js";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
  content: ReactNode;
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className={styles.root}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      {...props}
    >
      {children}
      {open ? <span role="tooltip">{content}</span> : null}
    </span>
  );
}
