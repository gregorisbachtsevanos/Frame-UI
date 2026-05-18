import { HTMLAttributes } from "react";
import * as styles from "./Carousel.css.js";

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {}

export function Carousel(props: CarouselProps) {
  return <div className={styles.root} {...props} />;
}
