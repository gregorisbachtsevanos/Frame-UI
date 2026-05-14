import { cn } from "../../utils/cn";
import { heading, text } from "./Typography.css";
import type { HeadingProps, TextProps } from "./Typography.types";

export const Text = ({
  as: Component = "p",
  size = "md",
  tone = "default",
  className,
  ...props
}: TextProps) => {
  return <Component className={cn(text({ size, tone }), className)} {...props} />;
};

export const Heading = ({
  as: Component = "h2",
  size = "md",
  className,
  ...props
}: HeadingProps) => {
  return <Component className={cn(heading({ size }), className)} {...props} />;
};
