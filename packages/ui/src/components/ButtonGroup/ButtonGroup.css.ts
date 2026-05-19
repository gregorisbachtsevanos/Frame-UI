import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
	display: "inline-flex",
	alignItems: "center",

	borderRadius: vars.radius.md,
	border: `1px solid ${vars.color.border}`,
	background: vars.color.surface,

	boxShadow: vars.shadow.sm,

	overflow: "hidden",
});

export const size = styleVariants({
	sm: {
		gap: "4px",
		padding: "4px",
	},
	md: {
		gap: "6px",
		padding: "6px",
	},
	lg: {
		gap: "8px",
		padding: "8px",
	},
});

export const attached = style({
	selectors: {
		"& > button:not(:first-child)": {
			borderLeft: "none",
			borderRadius: 0,
		},

		"& > button:first-child": {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		},

		"& > button:last-child": {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		},
	},
});
