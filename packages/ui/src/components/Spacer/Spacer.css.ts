import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  flexShrink: 0,
});

export const size = styleVariants({
  xs: { width: vars.space[1], height: vars.space[1] },
  sm: { width: vars.space[2], height: vars.space[2] },
  md: { width: vars.space[4], height: vars.space[4] },
  lg: { width: vars.space[6], height: vars.space[6] },
  xl: { width: vars.space[8], height: vars.space[8] },
  "2xl": { width: vars.space[12], height: vars.space[12] },
});

export const axis = styleVariants({
  horizontal: { height: 0, width: "auto" },
  vertical: { width: 0, height: "auto" },
});
