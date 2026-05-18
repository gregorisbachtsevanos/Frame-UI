import { HTMLAttributes } from "react";
import * as styles from "./AspectRatio.css.js";

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

export function AspectRatio({ ratio = 16 / 9, style, ...props }: AspectRatioProps) {
  return <div className={styles.root} style={{ aspectRatio: ratio.toString(), ...style }} {...props} />;
}
