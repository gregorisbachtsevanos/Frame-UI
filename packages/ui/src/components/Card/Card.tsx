import { HTMLAttributes, ReactNode } from "react";
import * as styles from "./Card.css.js";
import { Button } from "../Button/Button.js";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
}

export function Card({ header, footer, children, ...props }: CardProps) {
  return (
    <div className={styles.root} {...props}>
      {header ? <div className={styles.header}>{header}</div> : null}

      <div className={styles.body}>{children}</div>

      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </div>
  );
}
