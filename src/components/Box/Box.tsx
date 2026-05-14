import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { box } from "./Box.css";
import type { BoxProps } from "./Box.types";

export const Box = forwardRef<HTMLElement, BoxProps>(function Box(
  { as: Component = "div", className, ...props },
  ref
) {
  return <Component ref={ref} className={cn(box, className)} {...props} />;
});
