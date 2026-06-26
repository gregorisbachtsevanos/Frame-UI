import { HTMLAttributes, forwardRef } from "react";
import * as styles from "./Box.css";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Gap between child elements (flex/grid)
   */
  gap?: keyof typeof styles.gap;

  /**
   * Padding on all sides
   */
  p?: keyof typeof styles.padding;

  /**
   * Padding top and bottom
   */
  py?: keyof typeof styles.padding;

  /**
   * Padding left and right
   */
  px?: keyof typeof styles.padding;

  /**
   * Margin on all sides
   */
  m?: keyof typeof styles.margin;

  /**
   * Margin top and bottom
   */
  my?: keyof typeof styles.margin;

  /**
   * Margin left and right
   */
  mx?: keyof typeof styles.margin;

  /**
   * Display property
   */
  display?: "block" | "flex" | "grid" | "inline-block" | "inline" | "none";

  /**
   * Flex direction (only works with display="flex")
   */
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";

  /**
   * Justify content (only works with display="flex")
   */
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /**
   * Align items (only works with display="flex")
   */
  alignItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";

  /**
   * Width
   */
  width?: string | number;

  /**
   * Height
   */
  height?: string | number;

  /**
   * Border radius
   */
  radius?: keyof typeof styles.radius;

  /**
   * Background color
   */
  bg?: string;

  /**
   * Text color
   */
  color?: string;

  /**
   * Border
   */
  border?: string;

  /**
   * Shadow
   */
  shadow?: "none" | "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl";

  /**
   * CSS cursor property
   */
  cursor?: string;

  /**
   * Position property
   */
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
}

/**
 * Box component - A flexible layout primitive
 *
 * @component
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      gap,
      p,
      py,
      px,
      m,
      my,
      mx,
      display,
      flexDirection,
      justifyContent,
      alignItems,
      width,
      height,
      radius,
      bg,
      color,
      border,
      shadow,
      cursor,
      position,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const baseStyle: React.CSSProperties = {
      display: display || "block",
      width,
      height,
      backgroundColor: bg,
      color,
      border,
      cursor,
      position: position as any,
    };

    if (display === "flex") {
      baseStyle.flexDirection = (flexDirection as any) || "row";
      baseStyle.justifyContent = (justifyContent as any) || "flex-start";
      baseStyle.alignItems = (alignItems as any) || "stretch";
    }

    const classNames = [
      gap && styles.gap[gap],
      p && styles.padding[p],
      py && styles.paddingY[py],
      px && styles.paddingX[px],
      m && styles.margin[m],
      my && styles.marginY[my],
      mx && styles.marginX[mx],
      radius && styles.radius[radius],
      shadow && styles.shadow[shadow],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        className={classNames}
        style={{ ...baseStyle, ...style }}
        {...props}
      />
    );
  }
);

Box.displayName = "Box";
