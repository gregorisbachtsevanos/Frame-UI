import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import * as styles from "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";

  /** Button size */
  size?: "sm" | "md" | "lg";

  /** Button width */
  fullWidth?: boolean;

  /** Loading state */
  isLoading?: boolean;

  /** Icon element (typically SVG) */
  icon?: ReactNode;

  /** Icon position */
  iconPosition?: "left" | "right";

  /** Loading content to show while loading */
  loadingContent?: ReactNode;
}

/**
 * Button component - Fully accessible, themeable button with multiple variants
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 *
 * <Button variant="outline" disabled>
 *   Disabled
 * </Button>
 *
 * <Button size="sm" icon={<CheckIcon />}>
 *   Confirm
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      disabled = false,
      icon,
      iconPosition = "left",
      loadingContent = "Loading...",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const shouldShowIcon = icon && !isLoading;
    const showLoadingContent = isLoading && loadingContent;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={[
          styles.root,
          styles.variant[variant],
          styles.size[size],
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled,
          isLoading && styles.loading,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        {...props}
      >
        {showLoadingContent ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            {loadingContent}
          </>
        ) : (
          <>
            {shouldShowIcon && iconPosition === "left" && (
              <span className={styles.iconLeft}>{icon}</span>
            )}
            {children}
            {shouldShowIcon && iconPosition === "right" && (
              <span className={styles.iconRight}>{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
