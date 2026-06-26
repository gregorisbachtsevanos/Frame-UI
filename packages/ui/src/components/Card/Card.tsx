import { forwardRef, ReactNode } from "react";
import * as styles from "./Card.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "plain" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  header?: ReactNode;
  footer?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "elevated",
      padding = "md",
      header,
      footer,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={[
        styles.root,
        styles.variant[variant],
        styles.padding[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
);

Card.displayName = "Card";
