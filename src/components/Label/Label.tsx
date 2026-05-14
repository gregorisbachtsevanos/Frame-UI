import { cn } from "../../utils/cn";
import { label } from "./Label.css";
import type { LabelProps } from "./Label.types";

export const Label = ({ className, ...props }: LabelProps) => {
  return <label className={cn(label, className)} {...props} />;
};
