import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
	display: "flex",
	alignItems: "center",
	gap: "6px",
	fontSize: "13px",
	color: vars.color.text,
});

export const item = style({
	color: vars.color.text,
	textDecoration: "none",

	selectors: {
		"&:hover": {
			textDecoration: "underline",
		},
	},
});

export const separator = style({
	opacity: 0.5,
});
