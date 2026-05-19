import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import * as styles from "./Breadcrumb.css.js";

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {}

export function Breadcrumb(props: BreadcrumbProps) {
	return <nav aria-label="Breadcrumb" className={styles.root} {...props} />;
}

export interface BreadcrumbItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	current?: boolean;
}

export function BreadcrumbItem({ current, ...props }: BreadcrumbItemProps) {
	return (
		<a
			aria-current={current ? "page" : undefined}
			className={styles.item}
			{...props}
		/>
	);
}

export function BreadcrumbSeparator() {
	return <span className={styles.separator}>/</span>;
}
