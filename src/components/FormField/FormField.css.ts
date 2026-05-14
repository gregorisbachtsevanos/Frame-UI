import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[2]
});

export const label = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.foreground.default
});

export const error = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.danger.default
});

export const hint = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.foreground.disabled
});
