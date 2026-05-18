import { InputHTMLAttributes } from "react";
import * as styles from "./Slider.css.js";

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Slider(props: SliderProps) {
  return <input type="range" className={styles.root} {...props} />;
}
