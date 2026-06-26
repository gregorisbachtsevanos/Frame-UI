import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  width: "100%",
  fontFamily: vars.font.body,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  color: vars.color.text,
  resize: "vertical",
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: vars.color.primary,
      boxShadow: `0 0 0 2px ${vars.color.primaryLight}`,
    },
    "&::placeholder": {
      color: vars.color.textMuted,
    },
  },
});

export const size = styleVariants({
  sm: {
    padding: `${vars.space[2]} ${vars.space[3]}`,
    fontSize: vars.fontSize.sm,
    minHeight: "80px",
  },
  md: {
    padding: `${vars.space[2]} ${vars.space[3]}`,
    fontSize: vars.fontSize.base,
    minHeight: "120px",
  },
  lg: {
    padding: `${vars.space[3]} ${vars.space[4]}`,
    fontSize: vars.fontSize.lg,
    minHeight: "160px",
  },
});

export const invalid = style({
  borderColor: vars.color.danger,

  selectors: {
    "&:focus": {
      boxShadow: `0 0 0 2px ${vars.color.dangerLight}`,
    },
  },
});

export const disabled = style({
  opacity: 0.5,
  cursor: "not-allowed",
  backgroundColor: vars.color.surfaceSecondary,

  selectors: {
    "&:focus": {
      borderColor: vars.color.border,
      boxShadow: "none",
    },
  },
});

