import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./Pagination.css.js";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={styles.root} {...props} />
  )
);

Pagination.displayName = "Pagination";
