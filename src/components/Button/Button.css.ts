import { vars } from "../../theme";
import { styleVariants, style } from "@vanilla-extract/css";

export const base = style({
  border: "none",
  cursor: "pointer",
  borderRadius: vars.radius.md,
  fontFamily: vars.font.family.base,
  transition: vars.transition.normal,
  fontWeight: vars.font.weight.medium,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space[2]
});

export const size = styleVariants({
  sm: {
    padding: `${vars.space[2]} ${vars.space[3]}`,
    fontSize: vars.fontSize.sm
  },
  md: {
    padding: `${vars.space[3]} ${vars.space[4]}`,
    fontSize: vars.fontSize.md
  },
  lg: {
    padding: `${vars.space[4]} ${vars.space[5]}`,
    fontSize: vars.fontSize.lg
  }
});

export const intent = styleVariants({
  primary: {
    background: vars.color.primary.default,
    color: vars.color.background.default,
    ":hover": { background: vars.color.primary.hover },
    ":active": { background: vars.color.primary.active }
  },

  secondary: {
    background: vars.color.secondary.default,
    color: vars.color.foreground.default
  },

  danger: {
    background: vars.color.danger.default,
    color: vars.color.background.default
  },

  ghost: {
    background: "transparent",
    color: vars.color.foreground.default
  }
});

export const fullWidth = style({
  width: "100%"
});

export const loading = style({
  opacity: 0.7,
  pointerEvents: "none"
});
