import { TextareaHTMLAttributes } from "react";
import * as styles from "./Textarea.css.js";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea(props: TextareaProps) {
  return <textarea className={styles.root} {...props} />;
}
