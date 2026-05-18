import { HTMLAttributes } from "react";
import * as styles from "./Breadcrumb.css.js";

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {}

export function Breadcrumb(props: BreadcrumbProps) {
  return <nav className={styles.root} {...props}  />;
}
