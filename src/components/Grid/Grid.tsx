import { cn } from "../../utils/cn";
import { grid } from "./Grid.css";
import type { GridProps } from "./Grid.types";

export const Grid = ({
  columns,
  gap = "md",
  minColumnWidth,
  className,
  style,
  ...props
}: GridProps) => {
  const gridTemplateColumns = minColumnWidth
    ? `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`
    : columns
      ? `repeat(${columns}, minmax(0, 1fr))`
      : undefined;

  return (
    <div
      className={cn(grid({ gap }), className)}
      style={{ gridTemplateColumns, ...style }}
      {...props}
    />
  );
};
