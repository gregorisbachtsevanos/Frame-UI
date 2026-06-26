import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./HoverCard.css.js";

export interface HoverCardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={styles.root} {...props} />
  )
);

HoverCard.displayName = "HoverCard";
