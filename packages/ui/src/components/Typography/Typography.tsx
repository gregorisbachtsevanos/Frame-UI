import { HTMLAttributes } from "react";
import * as styles from "./Typography.css.js";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {}

export function Typography(props: TypographyProps) {
  return <p className={styles.root} {...props} />;
}
