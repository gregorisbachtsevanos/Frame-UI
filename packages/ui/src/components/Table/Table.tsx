import { TableHTMLAttributes } from "react";
import * as styles from "./Table.css.js";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}

export function Table(props: TableProps) {
  return <table className={styles.root} {...props} />;
}
