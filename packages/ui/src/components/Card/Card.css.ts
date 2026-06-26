import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.surface,
  transition: `all ${vars.transition.normal}`,
  overflow: "hidden",
});

export const variant = styleVariants({
  plain: {},
  outlined: {
    border: `1px solid ${vars.color.border}`,
  },
  elevated: {
    boxShadow: vars.shadow.md,
    border: `1px solid ${vars.color.border}`,
  },
});

export const padding = styleVariants({
  none: { padding: "0" },
  sm: { padding: vars.space[3] },
  md: { padding: vars.space[4] },
  lg: { padding: vars.space[6] },
});

export const header = style({
  paddingBottom: vars.space[3],
  borderBottom: `1px solid ${vars.color.border}`,
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.lg,
});

export const body = style({
  color: vars.color.text,
});

export const footer = style({
  paddingTop: vars.space[3],
  borderTop: `1px solid ${vars.color.border}`,
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space[2],
});
