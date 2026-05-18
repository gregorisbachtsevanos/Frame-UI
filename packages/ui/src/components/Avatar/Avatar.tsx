import { ImgHTMLAttributes } from "react";
import * as styles from "./Avatar.css.js";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Avatar(props: AvatarProps) {
  return <img className={styles.root} alt={props.alt ?? ""} {...props} />;
}
