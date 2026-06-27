import { forwardRef, HTMLAttributes } from "react";
import * as styles from "./Kbd.css.js";

export interface KbdProps extends HTMLAttributes<HTMLElement> {}

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, ...props }, ref) => (
    <kbd ref={ref} className={styles.root} {...props} />
  )
);

Kbd.displayName = "Kbd";
