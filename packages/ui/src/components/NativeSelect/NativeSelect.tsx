import { SelectHTMLAttributes } from "react";
import * as styles from "./NativeSelect.css.js";

export interface NativeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function NativeSelect(props: NativeSelectProps) {
  return <select className={styles.root} {...props} />;
}
