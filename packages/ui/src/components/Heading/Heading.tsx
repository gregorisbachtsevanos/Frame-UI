import { forwardRef, createElement } from "react";
import * as styles from "./Heading.css";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: "normal" | "semibold" | "bold";
  tracking?: "tight" | "normal" | "wide";
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 1,
      variant,
      weight = "bold",
      tracking = "tight",
      className,
      ...props
    },
    ref
  ) => {
    const finalVariant = (variant || (`h${level}` as const)) as keyof typeof styles.variant;
    const tag = `h${level}` as const;

    return createElement(
      tag,
      {
        ref,
        className: [
          styles.root,
          styles.variant[finalVariant],
          styles.weight[weight],
          styles.tracking[tracking],
          className,
        ]
          .filter(Boolean)
          .join(" "),
        ...props,
      } as any
    );
  }
);

Heading.displayName = "Heading";
