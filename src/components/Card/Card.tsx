import { cn } from "../../utils/cn";
import { card, cardBody, cardFooter, cardHeader } from "./Card.css";
import type { CardProps, CardSectionProps } from "./Card.types";

export const Card = ({
  size = "md",
  variant = "primary",
  className,
  ...props
}: CardProps) => {
  return <div className={cn(card({ size, variant }), className)} {...props} />;
};

export const CardHeader = ({ className, ...props }: CardSectionProps) => {
  return <div className={cn(cardHeader, className)} {...props} />;
};

export const CardBody = ({ className, ...props }: CardSectionProps) => {
  return <div className={cn(cardBody, className)} {...props} />;
};

export const CardFooter = ({ className, ...props }: CardSectionProps) => {
  return <div className={cn(cardFooter, className)} {...props} />;
};
