import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
});

export const hint = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.textSecondary,
  fontWeight: 400,
});

export const error = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.danger,
  fontWeight: 500,
});

