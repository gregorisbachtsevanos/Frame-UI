import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

/* Root container */
export const root = style({
	width: "320px",
	borderRadius: vars.radius.md,
	border: `1px solid ${vars.color.border}`,
	background: vars.color.surface,
	boxShadow: vars.shadow.md,
	padding: "12px",
	color: vars.color.text,
});

/* Header */
export const header = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: "12px",
	fontWeight: 600,
});

/* Nav buttons */
export const navButton = style({
	border: "none",
	background: "transparent",
	cursor: "pointer",
	padding: "6px 8px",
	borderRadius: vars.radius.sm,

	selectors: {
		"&:hover": {
			background: vars.color.surfaceSecondary,
		},
	},
});

/* Week row */
export const weekRow = style({
	display: "grid",
	gridTemplateColumns: "repeat(7, 1fr)",
	fontSize: "12px",
	fontWeight: 600,
	color: vars.color.textMuted,
	marginBottom: "6px",
});

/* Grid */
export const grid = style({
	display: "grid",
	gridTemplateColumns: "repeat(7, 1fr)",
	gap: "4px",
});

/* Day cell */
export const day = style({
	height: "36px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: vars.radius.sm,
	cursor: "pointer",
	fontSize: "13px",

	selectors: {
		"&:hover": {
			background: vars.color.surfaceSecondary,
		},
	},
});

/* Variants */
export const today = style({
	border: `1px solid ${vars.color.primary}`,
	fontWeight: 700,
});

export const selected = style({
	background: vars.color.primary,
	color: vars.color.primary,
});

export const outside = style({
	opacity: 0.35,
});
