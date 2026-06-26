import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  fontFamily: vars.font.body,
});

export const size = styleVariants({
  sm: { fontSize: vars.fontSize.sm },
  base: { fontSize: vars.fontSize.base },
  lg: { fontSize: vars.fontSize.lg },
});

export const weight = styleVariants({
  normal: { fontWeight: vars.fontWeight.normal },
  medium: { fontWeight: vars.fontWeight.medium },
  semibold: { fontWeight: vars.fontWeight.semibold },
  bold: { fontWeight: vars.fontWeight.bold },
});

export const color = styleVariants({
  default: { color: vars.color.text },
  muted: { color: vars.color.textMuted },
  subtle: { color: vars.color.textSecondary },
});
