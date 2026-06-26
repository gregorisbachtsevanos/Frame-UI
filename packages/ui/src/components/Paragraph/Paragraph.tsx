import { HTMLAttributes, forwardRef } from "react";
import * as styles from "./Paragraph.css";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg";
  muted?: boolean;
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ size = "base", muted = false, className, ...props }, ref) => (
    <p
      ref={ref}
      className={[
        styles.root,
        styles.size[size],
        muted && styles.muted,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  )
);

Paragraph.displayName = "Paragraph";
