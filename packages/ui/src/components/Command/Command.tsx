import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Command.css.js";

export interface CommandProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Command = forwardRef<HTMLDivElement, CommandProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} role="combobox" {...props} />
  )
);

Command.displayName = "Command";
