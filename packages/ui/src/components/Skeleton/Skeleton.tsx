import { HTMLAttributes } from "react";
import * as styles from "./Skeleton.css.js";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export function Skeleton(props: SkeletonProps) {
  return <div className={styles.root} {...props} />;
}
