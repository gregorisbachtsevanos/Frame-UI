import { cn } from "../../utils/cn";
import { stack } from "./Stack.css";
import type { StackProps } from "./Stack.types";

export const Stack = ({
  direction = "vertical",
  gap = "md",
  align,
  justify,
  wrap = false,
  className,
  style,
  ...props
}: StackProps) => {
  return (
    <div
      className={cn(stack({ direction, gap, wrap }), className)}
      style={{ alignItems: align, justifyContent: justify, ...style }}
      {...props}
    />
  );
};
