import { ImgHTMLAttributes, useState } from "react";
import * as styles from "./Avatar.css.js";

export interface AvatarProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "size"
> {
  fallback?: string;

  size?: "xs" | "sm" | "md" | "lg" | "xl";

  shape?: "circle" | "rounded" | "square";

  status?: "online" | "offline" | "busy" | "none";
}

export function Avatar({
  src,
  alt = "",
  fallback,
  size = "md",
  shape = "circle",
  status = "none",
  ...props
}: AvatarProps) {
  const [failed, setFailed] = useState(false);

  const showFallback = !src || failed;

  return (
    <div
      className={`
        ${styles.root}
        ${styles.size[size]}
        ${styles.shape[shape]}
        ${styles.status[status]}
      `}
      aria-label={alt}
      role="img"
    >
      {showFallback ? (
        <span className={styles.fallback}>
          {fallback ?? alt.charAt(0).toUpperCase()}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className={styles.image}
          onError={() => setFailed(true)}
          {...props}
        />
      )}
    </div>
  );
}
