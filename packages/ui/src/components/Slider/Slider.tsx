import { forwardRef, InputHTMLAttributes } from "react";
import * as styles from "./Slider.css.js";

export interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  sizeVariant?: "sm" | "md" | "lg";
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ sizeVariant = "md", className, ...props }, ref) => (
    <input
      ref={ref}
      type="range"
      className={`${styles.root} ${styles.size[sizeVariant]}`}
      {...props}
    />
  )
);

Slider.displayName = "Slider";
