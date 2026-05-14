import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens.css";

export const formField = style({
  display: "grid",
  gap: vars.space[1]
});

export const helpText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.foreground.disabled
});

export const errorText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.danger.default
});
