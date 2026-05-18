import { TableHTMLAttributes } from "react";
import * as styles from "./DataTable.css.js";

export interface DataTableProps extends TableHTMLAttributes<HTMLTableElement> {}

export function DataTable(props: DataTableProps) {
  return <table className={styles.root} {...props} />;
}
