import { HTMLAttributes } from "react";
import * as styles from "./ButtonGroup.css.js";
import clsx from "clsx";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	size?: "sm" | "md" | "lg";
	attached?: boolean;
}

export function ButtonGroup({
	size = "md",
	attached = false,
	className,
	...props
}: ButtonGroupProps) {
	return (
		<div
			className={clsx(
				styles.root,
				styles.size[size],
				attached && styles.attached,
				className,
			)}
			{...props}
		/>
	);
}
