import { HTMLAttributes } from "react";
import * as styles from "./Pagination.css.js";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {}

export function Pagination(props: PaginationProps) {
  return <nav className={styles.root} {...props} />;
}
