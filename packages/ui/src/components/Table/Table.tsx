import { forwardRef, TableHTMLAttributes } from "react";
import * as styles from "./Table.css.js";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <table ref={ref} className={styles.root} {...props} />
  )
);

Table.displayName = "Table";
