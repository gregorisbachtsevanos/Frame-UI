import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  fontFamily: vars.font.body,
  color: vars.color.text,
  lineHeight: vars.lineHeight.relaxed,
  margin: 0,
});

export const size = styleVariants({
  sm: { fontSize: vars.fontSize.sm },
  base: { fontSize: vars.fontSize.base },
  lg: { fontSize: vars.fontSize.lg },
});

export const muted = style({
  color: vars.color.textMuted,
});
