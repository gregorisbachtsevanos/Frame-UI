import { HTMLAttributes } from "react";
import * as styles from "./Card.css.js";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card(props: CardProps) {
  return <div className={styles.root} {...props} />;
}
