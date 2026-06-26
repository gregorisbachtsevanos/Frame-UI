import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as styles from "./ButtonGroup.css.js";
import clsx from "clsx";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	size?: "sm" | "md" | "lg";
	attached?: boolean;
	children?: ReactNode;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
	(
		{ size = "md", attached = false, className, ...props },
		ref
	) => (
		<div
			ref={ref}
			className={clsx(
				styles.root,
				styles.size[size],
				attached && styles.attached,
				className,
			)}
			role="group"
			{...props}
		/>
	)
);

ButtonGroup.displayName = "ButtonGroup";
