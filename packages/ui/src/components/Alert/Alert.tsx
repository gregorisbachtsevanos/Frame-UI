import { forwardRef, ReactNode } from "react";
import * as styles from "./Alert.css";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "info" | "success" | "warning" | "error";
  icon?: ReactNode;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      type = "info",
      icon,
      title,
      dismissible = false,
      onDismiss,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="alert"
      className={[styles.root, styles.type[type], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className={styles.container}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={styles.content}>
          {title && <div className={styles.title}>{title}</div>}
          {children && <div className={styles.message}>{children}</div>}
        </div>
        {dismissible && (
          <button
            className={styles.closeButton}
            onClick={onDismiss}
            aria-label="Close alert"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
);

Alert.displayName = "Alert";
