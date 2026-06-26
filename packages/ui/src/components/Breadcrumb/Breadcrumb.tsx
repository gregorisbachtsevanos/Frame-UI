import { forwardRef, AnchorHTMLAttributes, HTMLAttributes } from "react";
import * as styles from "./Breadcrumb.css.js";

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
	({ className, ...props }, ref) => (
		<nav
			ref={ref}
			aria-label="Breadcrumb"
			className={styles.root}
			{...props}
		/>
	)
);

Breadcrumb.displayName = "Breadcrumb";

export interface BreadcrumbItemProps
	extends AnchorHTMLAttributes<HTMLAnchorElement> {
	current?: boolean;
}

export const BreadcrumbItem = forwardRef<
	HTMLAnchorElement,
	BreadcrumbItemProps
>(({ current, className, ...props }, ref) => (
	<a
		ref={ref}
		aria-current={current ? "page" : undefined}
		className={`${styles.item} ${current ? styles.itemCurrent : ""}`}
		{...props}
	/>
));

BreadcrumbItem.displayName = "BreadcrumbItem";

export function BreadcrumbSeparator() {
	return <span className={styles.separator}>/</span>;
}
