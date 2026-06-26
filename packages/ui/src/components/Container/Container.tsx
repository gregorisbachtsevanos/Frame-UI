import { HTMLAttributes, forwardRef } from "react";
import * as styles from "./Container.css";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "fluid";
  px?: "sm" | "md" | "lg";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "lg", px = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={[
        styles.root,
        styles.size[size],
        styles.px[px],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  )
);

Container.displayName = "Container";
