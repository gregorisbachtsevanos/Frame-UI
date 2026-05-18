import { HTMLAttributes } from "react";
import * as styles from "./HoverCard.css.js";

export interface HoverCardProps extends HTMLAttributes<HTMLDivElement> {}

export function HoverCard(props: HoverCardProps) {
  return <div className={styles.root} {...props} />;
}
