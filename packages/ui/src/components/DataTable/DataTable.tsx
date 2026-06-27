import { forwardRef, TableHTMLAttributes } from "react";
import * as styles from "./DataTable.css.js";

export interface DataTableProps extends TableHTMLAttributes<HTMLTableElement> {}

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>(
  ({ className, ...props }, ref) => (
    <table ref={ref} className={styles.root} {...props} />
  )
);

DataTable.displayName = "DataTable";
