import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
	display: "flex",
	alignItems: "center",
	gap: vars.space[2],
	fontSize: vars.fontSize.sm,
	color: vars.color.textSecondary,
});

export const item = style({
	color: vars.color.primary,
	textDecoration: "none",
	transition: `color ${vars.transition.fast}`,
	fontWeight: 500,

	selectors: {
		"&:hover": {
			color: vars.color.primaryHover,
		},

		"&:focus-visible": {
			outline: `2px solid ${vars.color.focusRing}`,
			outlineOffset: "2px",
		},
	},
});

export const itemCurrent = style({
	color: vars.color.text,
	pointerEvents: "none",
	fontWeight: 500,
});

export const separator = style({
	color: vars.color.border,
	margin: `0 ${vars.space[1]}`,
});
